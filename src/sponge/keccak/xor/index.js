const xor = (O, o, ...I) => {
  const oi = o * 2;

  if (I.length >= 2) {
    const ii = I[1] * 2;

    O[oi] = I[0][ii];
    O[oi + 1] = I[0][ii + 1];
  }

  for (let i = 2; i < I.length; i += 2) {
    const ii = I[i + 1] * 2;

    O[oi] ^= I[i][ii];
    O[oi + 1] ^= I[i][ii + 1];
  }
};

export default xor;
