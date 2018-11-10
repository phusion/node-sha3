import copy from './copy';
import rotate from './rotate';
import xor from './xor';

const ROUND_CONSTANTS = new Uint32Array([
  0x00000000, 0x00000001,
  0x00000000, 0x00008082,
  0x80000000, 0x0000808a,
  0x80000000, 0x80008000,
  0x00000000, 0x0000808b,
  0x00000000, 0x80000001,
  0x80000000, 0x80008081,
  0x80000000, 0x00008009,
  0x00000000, 0x0000008a,
  0x00000000, 0x00000088,
  0x00000000, 0x80008009,
  0x00000000, 0x8000000a,
  0x00000000, 0x8000808b,
  0x80000000, 0x0000008b,
  0x80000000, 0x00008089,
  0x80000000, 0x00008003,
  0x80000000, 0x00008002,
  0x80000000, 0x00000080,
  0x00000000, 0x0000800a,
  0x80000000, 0x8000000a,
  0x80000000, 0x80008081,
  0x80000000, 0x00008080,
  0x00000000, 0x80000001,
  0x80000000, 0x80008008
]);
const RHO_OFFSETS = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 2, 14, 27, 41, 56, 8, 25, 43, 62, 18, 39, 61, 20, 44];
const PI_SHUFFLES = [10, 7, 11, 17, 18, 3, 5, 16, 8, 21, 24, 4, 15, 23, 19, 13, 12, 2, 20, 14, 22, 9, 6, 1];

const theta0 = ({ A, C }) => {
  for (let x = 0; x < 5; x++) {
    xor(C, x, A, x, A, x + 5, A, x + 10, A, x + 15, A, x + 20);
  }
};

const theta1 = ({ A, C, D, W }) => {
  for (let x = 0; x < 5; x++) {
    copy(C, (x + 1) % 5, W, 0);
    xor(D, x, C, (x + 4) % 5, rotate(W, 1), 0);

    for (let y = 0; y < 25; y += 5) {
      xor(A, y + x, A, y + x, D, x);
    }
  }
};

const theta = ({ A, C, D, W }) => {
  theta0({ A, C });
  theta1({ A, C, D, W });
};

const rhoPi = ({ A, C, W }) => {
  copy(A, 1, W, 0);

  for (let i = 0; i < 24; i++) {
    const j = PI_SHUFFLES[i];
    const r = RHO_OFFSETS[i];

    copy(A, j, C, 0);
    copy(rotate(W, r), 0, A, j);
    copy(C, 0, W, 0);
  }
};

const chi = ({ A, C }) => {
  for (let y = 0; y < 25; y += 5) {
    for (let x = 0; x < 5; x++) {
      copy(A, y + x, C, x);
    }

    for (let x = 0; x < 5; x++) {
      const xy = (y + x) * 2;
      const x1 = (x + 1) % 5 * 2;
      const x2 = (x + 2) % 5 * 2;

      A[xy] ^= ~C[x1] & C[x2];
      A[xy + 1] ^= ~C[x1 + 1] & C[x2 + 1];
    }
  }
};

const keccak = () => {
  // Intermediate variables
  const C = new Uint32Array(10);
  const D = new Uint32Array(10);
  const W = new Uint32Array(2);

  /**
   * @param {Uint32Array} A - A buffer of 50 32-bit words.
   *
   * @returns {void}
   */
  return (A) => {
    for (let roundIndex = 0; roundIndex < 24; roundIndex++) {
      theta({ A, C, D, W });
      rhoPi({ A, C, W });
      chi({ A, C });
      xor(A, 0, A, 0, ROUND_CONSTANTS, roundIndex);
    }
  };
};

export default keccak;
