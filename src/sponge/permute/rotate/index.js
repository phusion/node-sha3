const M = 32;

/**
 * Performs an in-place leftwise bit rotation on the given 64-bit word.
 *
 * @param {Uint32Array} W - The 64-bit word, represented as a Uint32Array of length 2.
 * @param {Number} r - The number of bits to rotate.
 *
 * @returns {Uint32Array} - Returns the given word after performing the rotation.
 */
const rotate = (W, r) => {
  const [H, L] = W;
  const i = r < 32 ? 0 : 1;
  const j = (i + 1) % 2;

  W[i] = H << r | L >>> M - r;
  W[j] = L << r | H >>> M - r;

  return W;
};

export default rotate;
