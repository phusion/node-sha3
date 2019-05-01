import { Buffer } from 'buffer';
import permute from './precomputed-permute';

const allowedCapacityValues = [224, 256, 384, 512];

const writeState = (I, O) => {
  for (let i = 0; i < I.length; i += 8) {
    const o = i / 4;
    O[o] ^= I[i + 7] << 24 | I[i + 6] << 16 | I[i + 5] << 8 | I[i + 4];
    O[o + 1] ^= I[i + 3] << 24 | I[i + 2] << 16 | I[i + 1] << 8 | I[i];
  }
};

// eslint-disable-next-line max-statements
const readHash = (I, n) => {
  const O = Buffer.allocUnsafe(n);

  for (let o = 0; o < n; o += 8) {
    const i = o / 4;
    O[o] = I[i + 1];
    O[o + 1] = I[i + 1] >>> 8;
    O[o + 2] = I[i + 1] >>> 16;
    O[o + 3] = I[i + 1] >>> 24;
    O[o + 4] = I[i];
    O[o + 5] = I[i] >>> 8;
    O[o + 6] = I[i] >>> 16;
    O[o + 7] = I[i] >>> 24;
  }

  return O;
};

// eslint-disable-next-line max-statements
const Sponge = function({ capacity, padding }) {
  if (!allowedCapacityValues.includes(capacity)) {
    throw new Error('Unsupported hash length');
  }

  const keccak = permute();

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
        writeState(queue, state);
        keccak(state);
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

    output.queue.fill(0, queueOffset);

    output.queue[queueOffset] |= padding;
    output.queue[queueSize - 1] |= 0x80;

    writeState(output.queue, output.state);
    keccak(output.state);

    return readHash(output.state, hashSize);
  };

  this.reset = () => {
    queue.fill(0);
    state.fill(0);
    queueOffset = 0;
    return this;
  };

  return this;
};

export default Sponge;
