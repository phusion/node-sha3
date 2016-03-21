#ifndef SHA3_H
#define SHA3_H

#define SHA3_STATE_BITS  1600
#define SHA3_STATE_BYTES (SHA3_STATE_BITS/8)
#define SHA3_WORD_BYTES sizeof(uint64_t)
#define SHA3_WORD_BITS (SHA3_WORD_BYTES*8)
#define SHA3_STATE_WORDS (SHA3_STATE_BYTES/SHA3_WORD_BYTES) 

#include <stdint.h>
#ifndef __cplusplus
#include <stdbool.h>
#endif
#include <string.h>

typedef enum _SHA3_RESULT { SHA3_ERR = 0, SHA3_OK = 1 } SHA3_RESULT;
typedef struct _sha3_ctx {
        size_t  hashSz;                // bytes
        union { // Keccak state
                uint64_t      s[SHA3_STATE_WORDS];
                uint8_t      sb[SHA3_STATE_BYTES];
        };
        size_t   capacityWords;
        uint64_t saved;
        size_t   byteIndex;
        size_t   wordIndex;
        bool     squeezing;
        uint8_t  delimitedSuffix; // delimited suffiz
        uint8_t _struct_pad[64-sizeof(bool)-sizeof(uint8_t)];
} sha3_ctx; 

#ifdef __cplusplus
extern "C" {
#endif

SHA3_RESULT FIPS202_SHA3_Init(sha3_ctx *const ctx, size_t bits);
SHA3_RESULT FIPS202_SHA3_Update(sha3_ctx *const ctx, const void *in, size_t inSz);
SHA3_RESULT FIPS202_SHA3_Final(sha3_ctx *const ctx, void *out, size_t outSz);

/* in bytes */
size_t FIPS202_SHA3_HashSize(const sha3_ctx *const ctx);
/* in bytes */
size_t FIPS202_SHA3_BlockSize(const sha3_ctx *const ctx);

#ifdef __cplusplus
}
#endif

#endif
