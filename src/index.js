import { Buffer } from 'buffer';
import Sponge from './sponge';

const createHash = ({ padding }) => function Hash(size = 512) {
  if (!this || this.constructor !== Hash) {
    return new Hash(size);
  }

  const sponge = new Sponge({ capacity: size });

  this.update = (input, encoding = 'utf8') => {
    if (Buffer.isBuffer(input)) {
      sponge.absorb(input);
      return this;
    }

    if (typeof input === 'string') {
      return this.update(Buffer.from(input, encoding));
    }

    throw new TypeError('Not a string or buffer');
  };

  this.digest = (formatOrOptions = 'binary') => {
    const options = typeof formatOrOptions === 'string' ? { format: formatOrOptions } : formatOrOptions;
    const buffer = sponge.squeeze({
      buffer: options.buffer,
      padding: options.padding || padding
    });

    if (options.format && options.format !== 'binary') {
      return buffer.toString(options.format);
    }

    return buffer;
  };

  this.reset = () => {
    sponge.reset();
    return this;
  };

  return this;
};

/**
 * The Keccak reference implementation uses the simplest possible padding scheme,
 * described as follows:
 *
 * > Definition 1. Multi-rate padding, denoted by pad10\∗1, appends a single bit 1
 * > followed by the minimum number of bits 0 followed by a single bit 1 such that
 * > the length of the result is a multiple of the block length.
 *
 * @see {@link https://keccak.team/files/Keccak-reference-3.0.pdf}, Section 1.1.2
 */
const Keccak = createHash({ padding: 0x01 });

/**
 * The SHA-3 specification requires that the input message be appended with a
 * two-bit suffix, `01`. For byte-aligned messages, this results in an extra
 * `0x02` byte (bits fill in from the right).
 *
 * Then, the standard Keccak padding scheme is applied (pad10*1), placing an
 * additional bit at the `0x04` position, resulting in `0x06`.
 *
 * @see {@link https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf}, Section B.2
 */
const SHA3 = createHash({ padding: 0x06 });

/**
 * Provided for historical purposes. This is an alias for the *Keccak* algorithm,
 * which an early version of SHA3 with different padding.
 *
 * @deprecated
 */
const SHA3Hash = Keccak;

/**
 * For backwards-compatibility, sprinkle SHA3Hash into the default export.
 *
 * @deprecated
 */
SHA3.SHA3Hash = SHA3Hash;

// Named exports for all hashes included by this library.
export { Keccak, SHA3, SHA3Hash };

// Make the default export useful as-is.
export default SHA3;
