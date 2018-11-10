// eslint-disable-next-line max-params
const copy = (I, i, O, o) => {
  const oi = o * 2;
  const ii = i * 2;

  O[oi] = I[ii];
  O[oi + 1] = I[ii + 1];
};

module.exports = copy;
