import { Buffer } from 'buffer';
import Sponge from './sponge';

const createHash = ({ padding }) => function Hash(size = 512) {
  if (!this || this.constructor !== Hash) {
    return new Hash(size);
  }

  const sponge = new Sponge({ capacity: size, padding });

  this.update = (input) => {
    if (Buffer.isBuffer(input)) {
      sponge.absorb(input);
      return this;
    }

    if (typeof input === 'string') {
      return this.update(Buffer.from(input, 'utf8'));
    }

    throw new TypeError('Not a string or buffer');
  };

  this.digest = (format = 'binary') => {
    const buffer = sponge.squeeze();
    if (format && format !== 'binary') {
      return buffer.toString(format);
    }
    return buffer;
  };

  return this;
};

const Keccak = createHash({ padding: 0x01 });
const SHA3 = createHash({ padding: 0x06 });

/**
 * Provided for historical purposes. This is an alias for the *Keccak* algorithm,
 * which an early version of SHA3 with different padding.
 *
 * @deprecated
 */
const SHA3Hash = Keccak;

const index = { Keccak, SHA3, SHA3Hash };

export { Keccak, SHA3, SHA3Hash };

export default index;
