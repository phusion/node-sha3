#include "sha3.h"
#include <stdlib.h>

#define SHA3_ROUNDS        24 
#define MSB_U64 ((uint64_t)1 << 63) // avoid 64-bit literal portability concerns
#define SHA3_ROTL64(x, y) \
	(((x) << (y)) | ((x) >> (SHA3_WORD_BITS - (y))))

static const uint64_t
Rc[SHA3_ROUNDS] = {
                   0x1,             0x8082,
        MSB_U64|0x808a, MSB_U64|0x80008000,
                0x808b,         0x80000001,
    MSB_U64|0x80008081, MSB_U64|    0x8009,
                  0x8a,               0x88,
            0x80008009,         0x8000000a,
            0x8000808b, MSB_U64|      0x8b,
        MSB_U64|0x8089, MSB_U64|    0x8003,
        MSB_U64|0x8002, MSB_U64|      0x80,
                0x800a, MSB_U64|0x8000000a,
    MSB_U64|0x80008081, MSB_U64|    0x8080,
            0x80000001, MSB_U64|0x80008008
};

static const uint8_t
Ro[SHA3_ROUNDS] = {
	 1,  3,  6, 10, 15, 21,
	28, 36, 45, 55,  2, 14,
	27, 41, 56,  8, 25, 43,
	62, 18, 39, 61, 20, 44
};

static const uint8_t
Pi[SHA3_ROUNDS] = {
	10,  7, 11, 17, 18, 3,
	 5, 16,  8, 21, 24, 4,
	15, 23, 19, 13, 12, 2,
	20, 14, 22,  9,  6, 1
};


#define THETA(s,i) ((s)[(i)] ^ (s)[(i)+5] ^ (s)[(i)+10] ^ (s)[(i)+15] ^ (s)[(i)+20])

static void
sha3f(uint64_t s[SHA3_STATE_WORDS])
{
	uint64_t bc[5];
	uint64_t t;

	for (int round = 0; round < SHA3_ROUNDS; ++round) {

		// Theta
		for (size_t i = 0; i < 5; ++i) {
			bc[i] = THETA(s, i);
		}

		for (size_t i = 0; i < 5; ++i) {
			t = bc[(i+4)%5] ^ SHA3_ROTL64(bc[(i+1)%5], 1);
			for (size_t j = 0; j < SHA3_STATE_WORDS; j += 5)
				s[i+j] ^= t;
		}

		// Rho Pi
		t = s[1];
		for (size_t i = 0; i < SHA3_STATE_WORDS-1; ++i) {
			const uint8_t j = Pi[i];
			bc[0] = s[j];
			s[j] = SHA3_ROTL64(t, Ro[i]);
			t = bc[0];
		}

		// Chi
		for (int j = 0; j < 5; ++j) {
			for (int i = 0; i < 5; ++i)
				bc[i] = s[i+5*j];
			for (int i = 0; i < 5; ++i)
				s[i+5*j] ^= ~bc[(i+1)%5] & bc[(i+2)%5];
		}

		// Iota
		s[0] ^= Rc[round];
	}
}

SHA3_RESULT
FIPS202_SHA3_Init(sha3_ctx *const ctx, size_t bits)
{ 
	if (bits == 0 || ((2*bits)%SHA3_WORD_BITS) != 0 || ctx == NULL) {
		return SHA3_ERR;
	}

	memset(ctx, 0, sizeof(sha3_ctx));
	ctx->hashSz = bits/8;
	ctx->squeezing = false;
	ctx->capacityWords = 2*bits / SHA3_WORD_BITS;
	memset(ctx->sb, 0, sizeof(ctx->sb));
	ctx->delimitedSuffix = 0x06;
	ctx->saved = 0;
	ctx->byteIndex = 0;
	ctx->wordIndex = 0;

	return SHA3_OK;
}

static void 
fillSaved(sha3_ctx *const ctx, const uint8_t **in, size_t *rem)
{
	while ((*rem)-- > 0) {
		ctx->saved |= (uint64_t)(**in) << (ctx->byteIndex * 8);
		++(*in);
		++ctx->byteIndex;
	}
}


// Absorb
SHA3_RESULT
FIPS202_SHA3_Update(sha3_ctx *const ctx, const void *inPtr, size_t inSz)
{
	if (ctx == NULL || inPtr == NULL) {
		return SHA3_ERR;
	}
	if (ctx->squeezing) {
		return SHA3_ERR;
	}

	const uint8_t *in = (const uint8_t *)inPtr;

	size_t old_tail = (8 - ctx->byteIndex) & 7;

	if (inSz < old_tail) {
		fillSaved(ctx, &in, &inSz);
		return SHA3_OK;
	}

	if (old_tail > 0) {
		inSz -= old_tail;
		fillSaved(ctx, &in, &old_tail);

		ctx->s[ctx->wordIndex] ^= ctx->saved;
		ctx->byteIndex = 0;
		ctx->saved = 0;
		++ctx->wordIndex;
		if (ctx->wordIndex == (SHA3_STATE_WORDS - ctx->capacityWords)) {
			sha3f(ctx->s);
			ctx->wordIndex = 0;
		}
	}

	const size_t words = inSz / sizeof(uint64_t);
	size_t tail = inSz - words * sizeof(uint64_t); // inSz % sizeof(uint64_t)

	for (size_t i = 0; i < words; ++i, in += sizeof(uint64_t)) {
		const uint64_t t = (uint64_t)(in[0]) |
				   (uint64_t)(in[1]) << 8*1 |
				   (uint64_t)(in[2]) << 8*2 |
				   (uint64_t)(in[3]) << 8*3 |
				   (uint64_t)(in[4]) << 8*4 |
				   (uint64_t)(in[5]) << 8*5 |
				   (uint64_t)(in[6]) << 8*6 |
				   (uint64_t)(in[7]) << 8*7;
		ctx->s[ctx->wordIndex] ^= t;
		++ctx->wordIndex;
		if (ctx->wordIndex == (SHA3_STATE_WORDS - ctx->capacityWords)) {
			sha3f(ctx->s);
			ctx->wordIndex = 0;
		}
	}

	fillSaved(ctx, &in, &tail); // finally, save the partial word

	return SHA3_OK;
}

typedef enum _ENDIANNESS {
	ENDIANNESS_LITTLE,
	ENDIANNESS_BIG,
	ENDIANNESS_UNKNOWN
} ENDIANNESS;

static ENDIANNESS
endian(void)
{
	static const uint32_t endian_var = 0x11223344;
	switch (*(const uint8_t *)(&endian_var)) {
	case 0x11: return ENDIANNESS_BIG;
	case 0x44: return ENDIANNESS_LITTLE;
	}
	return ENDIANNESS_UNKNOWN;
}

static uint64_t
u64_native_to_network_order(uint64_t x)
{
	switch (endian()) {
	case ENDIANNESS_LITTLE: return x;
	case ENDIANNESS_BIG:
				return (
				((x << (8*7)) & 0xff00000000000000) |
				((x << (8*5)) & 0x00ff000000000000) |
				((x << (8*3)) & 0x0000ff0000000000) |
				((x << (8*1)) & 0x000000ff00000000) |
				((x >> (8*1)) & 0x00000000ff000000) |
				((x >> (8*3)) & 0x0000000000ff0000) |
				((x >> (8*5)) & 0x000000000000ff00) |
				((x >> (8*7)) & 0x00000000000000ff) 
				);
	case ENDIANNESS_UNKNOWN: abort();
	}
	abort();
}

SHA3_RESULT
FIPS202_SHA3_Final(sha3_ctx *const ctx, void *outPtr, size_t outSz)
{
	if (ctx == NULL || outPtr == NULL) {
		return SHA3_ERR;
	}
	if (ctx->squeezing) {
		return SHA3_ERR;
	}
	if (outSz != ctx->hashSz) {
		return SHA3_ERR;
	}
	ctx->squeezing = true;

	uint8_t *out = (uint8_t *)outPtr;
	
	/* pad and finish */
	ctx->s[ctx->wordIndex] ^= ctx->saved;
	ctx->s[ctx->wordIndex] ^= (uint64_t)(ctx->delimitedSuffix) << (ctx->byteIndex*8);
	ctx->s[SHA3_STATE_WORDS - ctx->capacityWords-1] ^= MSB_U64; 
	sha3f(ctx->s);

	for (size_t i = 0; i < SHA3_STATE_WORDS; ++i) {
		ctx->s[i] = u64_native_to_network_order(ctx->s[i]);
	}

	memcpy(out, ctx->sb, ctx->hashSz);

	return SHA3_OK;
}

size_t
FIPS202_SHA3_HashSize(const sha3_ctx *const ctx)
{
	if (ctx == NULL) {
		return 0;
	}
	return ctx->hashSz;
}

size_t
FIPS202_SHA3_BlockSize(const sha3_ctx *const ctx)
{
	if (ctx == NULL) {
		return 0;
	}
	return SHA3_STATE_BYTES - 2*ctx->hashSz;
}
