import isInRange from '../is-in-range';

// eslint-disable-next-line max-params
const rightShift = (input, inputOffset, output, outputOffset, bitwiseShift) => {
  const byteOffset = Math.floor(bitwiseShift / 8);
  const rightBitOffset = bitwiseShift % 8;
  const leftBitOffset = 8 - rightBitOffset;
  for (let i = 7; i >= 0; i--) {
    const rightIndex = i - byteOffset;
    const right = isInRange(0, rightIndex, 8) ? input[inputOffset + rightIndex] : 0x00;
    const leftIndex = rightIndex - 1;
    const left = isInRange(0, leftIndex, 8) ? input[inputOffset + leftIndex] : 0x00;
    output[outputOffset + i] = left << leftBitOffset | right >>> rightBitOffset;
  }
};

export default rightShift;
