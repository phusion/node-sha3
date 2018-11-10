const M = 32;

const rotate = (W, r) => {
  const [H, L] = W;
  const i = r < 32 ? 0 : 1;
  const j = (i + 1) % 2;

  W[i] = H << r | L >>> M - r;
  W[j] = L << r | H >>> M - r;

  return W;
};

export default rotate;
