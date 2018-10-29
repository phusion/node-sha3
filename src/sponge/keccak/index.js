import { Buffer } from 'buffer';
import copy from './copy';
import flip from './flip';
import rotate from './rotate';
import xor from './xor';

const ROUND_CONSTANTS = Buffer.from('00000000000000010000000000008082800000000000808a8000000080008000000000000000808b000000008000000180000000800080818000000000008009000000000000008a00000000000000880000000080008009000000008000000a000000008000808b800000000000008b8000000000008089800000000000800380000000000080028000000000000080000000000000800a800000008000000a8000000080008081800000000000808000000000800000018000000080008008', 'hex');
const RHO_OFFSETS = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 2, 14, 27, 41, 56, 8, 25, 43, 62, 18, 39, 61, 20, 44];
const PI_SHUFFLES = [10, 7, 11, 17, 18, 3, 5, 16, 8, 21, 24, 4, 15, 23, 19, 13, 12, 2, 20, 14, 22, 9, 6, 1];

// eslint-disable-next-line complexity, max-statements
const keccak = (A) => {
  // Intermediate variables
  const C = Buffer.alloc(40);
  const D = Buffer.alloc(40);
  const W = Buffer.alloc(8);

  flip(A);

  for (let roundIndex = 0; roundIndex < 24; roundIndex++) {
    // --- θ --- //
    for (let x = 0; x < 5; x++) {
      xor(C, x, A, x, A, x + 5, A, x + 10, A, x + 15, A, x + 20);
    }

    for (let x = 0; x < 5; x++) {
      copy(C, (x + 1) % 5, W, 0);
      xor(D, x, C, (x + 4) % 5, rotate(W, 0, 1), 0);

      for (let y = 0; y < 25; y += 5) {
        xor(A, y + x, A, y + x, D, x);
      }
    }

    // --- ρπ --- //
    copy(A, 1, W, 0);

    for (let i = 0; i < 24; i++) {
      const j = PI_SHUFFLES[i];
      copy(A, j, C, 0);
      copy(rotate(W, 0, RHO_OFFSETS[i]), 0, A, j);
      copy(C, 0, W, 0);
    }

    // --- χ --- //
    for (let y = 0; y < 25; y += 5) {
      for (let x = 0; x < 5; x++) {
        copy(A, y + x, C, x);
      }

      for (let x = 0; x < 5; x++) {
        for (let i = 0; i < 8; i++) {
          const xyi = (y + x) * 8 + i;
          const x1i = (x + 1) % 5 * 8 + i;
          const x2i = (x + 2) % 5 * 8 + i;

          A[xyi] ^= ~C[x1i] & C[x2i];
        }
      }
    }

    // --- ι --- //
    xor(A, 0, A, 0, ROUND_CONSTANTS, roundIndex);
  }

  flip(A);

  return A;
};

export default keccak;
