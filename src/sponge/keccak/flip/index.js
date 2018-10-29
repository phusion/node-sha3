const flipEndianness = (buffer) => {
  const { length: size } = buffer;
  const pivot = size / 2;
  let swap = 0x00;
  for (let i = 0; i < pivot; i++) {
    swap = buffer[i];
    buffer[i] = buffer[size - 1 - i];
    buffer[size - 1 - i] = swap;
  }
  return buffer;
};

const flipWordEndianness = (buffer) => {
  const n = buffer.length / 8 - 1;
  for (let i = 0; i < n; i++) {
    const start = i * 8;
    const end = start + 8;
    flipEndianness(buffer.slice(start, end));
  }
};

module.exports = flipWordEndianness;
