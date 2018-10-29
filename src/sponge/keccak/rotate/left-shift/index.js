import isInRange from '../is-in-range';

// eslint-disable-next-line max-params
const leftShift = (input, inputOffset, output, outputOffset, bitwiseLeftShift) => {
  const byteOffset = Math.floor(bitwiseLeftShift / 8);
  const leftBitOffset = bitwiseLeftShift % 8;
  const rightBitOffset = 8 - leftBitOffset;

  for (let i = 0; i < 8; i++) {
    const leftIndex = i + byteOffset;
    const left = isInRange(0, leftIndex, 8) ? input[inputOffset + leftIndex] : 0x00;
    const rightIndex = leftIndex + 1;
    const right = isInRange(0, rightIndex, 8) ? input[inputOffset + rightIndex] : 0x00;
    output[outputOffset + i] = left << leftBitOffset | right >>> rightBitOffset;
  }
};

export default leftShift;
