// eslint-disable-next-line max-statements
const xor = (output, outputIndex, ...inputs) => {
  const oi = outputIndex * 8;

  if (inputs.length >= 2) {
    const [input, inputIndex] = inputs;
    const ii = inputIndex * 8;

    for (let j = 0; j < 8; j++) {
      output[oi + j] = input[ii + j];
    }
  }

  for (let i = 2; i < inputs.length; i += 2) {
    const input = inputs[i];
    const inputIndex = inputs[i + 1];
    const ii = inputIndex * 8;

    for (let j = 0; j < 8; j++) {
      output[oi + j] ^= input[ii + j];
    }
  }
};

export default xor;
