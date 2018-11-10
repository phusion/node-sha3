import { Buffer } from 'buffer';
import keccak from './keccak';

const allowedCapacityValues = [224, 256, 384, 512];

const fill = (A, value, offset = 0) => {
  for (let i = offset; i < A.length; i++) {
    A[i] = value;
  }
};

// eslint-disable-next-line max-params
const toWord = (I, i, O, o) => {
  O[o] ^= I[i + 7] << 24 | I[i + 6] << 16 | I[i + 5] << 8 | I[i + 4];
  O[o + 1] ^= I[i + 3] << 24 | I[i + 2] << 16 | I[i + 1] << 8 | I[i];
};

// eslint-disable-next-line max-params
const toBytes = (I, i, O, o) => {
  O[o] = I[i + 1];
  O[o + 1] = I[i + 1] >>> 8;
  O[o + 2] = I[i + 1] >>> 16;
  O[o + 3] = I[i + 1] >>> 24;
  O[o + 4] = I[i];
  O[o + 5] = I[i] >>> 8;
  O[o + 6] = I[i] >>> 16;
  O[o + 7] = I[i] >>> 24;
};

const commit = (queue, state, permute) => {
  for (let i = 0; i < queue.length; i += 8) {
    toWord(queue, i, state, i / 4);
  }
  permute(state);
};

const exportHash = (state, hashSize) => {
  const hash = Buffer.allocUnsafe(hashSize);

  for (let i = 0; i < hashSize; i += 8) {
    toBytes(state, i / 4, hash, i);
  }

  return hash;
};

// eslint-disable-next-line max-statements
const Sponge = function({ capacity, padding }) {
  if (!allowedCapacityValues.includes(capacity)) {
    throw new Error('Unsupported hash length');
  }

  const permute = keccak();

  const stateSize = 200;
  const hashSize = capacity / 8;
  const queueSize = stateSize - hashSize * 2;
  let queueOffset = 0;

  const state = new Uint32Array(stateSize / 4);
  const queue = Buffer.allocUnsafe(queueSize);

  this.absorb = (buffer) => {
    for (let i = 0; i < buffer.length; i++) {
      queue[queueOffset] = buffer[i];
      queueOffset += 1;

      if (queueOffset >= queueSize) {
        commit(queue, state, permute);
        queueOffset = 0;
      }
    }
    return this;
  };

  this.squeeze = () => {
    const output = {
      queue: Buffer.allocUnsafe(queueSize),
      state: new Uint32Array(stateSize / 4)
    };

    queue.copy(output.queue);
    for (let i = 0; i < state.length; i++) {
      output.state[i] = state[i];
    }

    fill(output.queue, 0, queueOffset);

    output.queue[queueOffset] |= padding;
    output.queue[queueSize - 1] |= 0x80;

    commit(output.queue, output.state, permute);

    return exportHash(output.state, hashSize);
  };

  this.reset = () => {
    fill(queue, 0);
    fill(state, 0);
    queueOffset = 0;
    return this;
  };

  return this;
};

export default Sponge;
