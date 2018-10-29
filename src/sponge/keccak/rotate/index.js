import leftShift from './left-shift';
import rightShift from './right-shift';

const left = new Uint8Array(8);
const right = new Uint8Array(8);

// eslint-disable-next-line max-params
const rotate = (input, inputOffset, rotation, output, outputOffset) => {
  if (!output || typeof outputOffset === 'undefined') {
    return rotate(input, inputOffset, rotation, input, inputOffset);
  }

  if (rotation !== 0) {
    leftShift(input, inputOffset, left, 0, rotation);
    rightShift(input, inputOffset, right, 0, 64 - rotation);
    for (let i = 0; i < 8; i++) {
      output[outputOffset + i] = left[i] | right[i];
    }
  }

  return output;
};

export default rotate;
