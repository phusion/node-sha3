import { Buffer } from 'buffer';
import keccak from './keccak';

const allowedCapacityValues = [224, 256, 384, 512];

const commit = (input, output) => {
  for (let i = 0; i < input.length; i++) {
    output[i] ^= input[i];
  }
  keccak(output);
};

// eslint-disable-next-line max-statements
const Sponge = function({ capacity, padding }) {
  if (!allowedCapacityValues.includes(capacity)) {
    throw new Error('Unsupported hash length');
  }

  const stateSize = 200;
  const hashSize = capacity / 8;
  const queueSize = stateSize - hashSize * 2;
  let queueOffset = 0;

  const state = Buffer.alloc(stateSize);
  state.fill(0);

  const queue = Buffer.alloc(queueSize);
  queue.fill(0);

  this.absorb = (buffer) => {
    for (let i = 0; i < buffer.length; i++) {
      queue[queueOffset] = buffer[i];
      queueOffset += 1;
      if (queueOffset >= queueSize) {
        commit(queue, state);
        queueOffset = 0;
        queue.fill(0);
      }
    }
    return this;
  };

  this.squeeze = () => {
    const output = {
      queue: Buffer.alloc(queueSize),
      state: Buffer.alloc(stateSize)
    };

    queue.copy(output.queue);
    state.copy(output.state);

    output.queue[queueOffset] |= padding;
    output.queue[queueSize - 1] |= 0x80;

    commit(output.queue, output.state);

    return output.state.slice(0, hashSize);
  };

  return this;
};

export default Sponge;
