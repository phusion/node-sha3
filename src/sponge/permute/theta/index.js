import copy from '../copy';
import xor from '../xor';

// eslint-disable-next-line max-statements
const theta = ({ A, C, D, W }) => {
  let H = 0;
  let L = 0;

  for (let x = 0; x < 5; x++) {
    xor(C, x)(A, x, A, x + 5, A, x + 10, A, x + 15, A, x + 20);
  }

  for (let x = 0; x < 5; x++) {
    copy(C, (x + 1) % 5)(W, 0);

    H = W[0];
    L = W[1];
    W[0] = H << 1 | L >>> 31;
    W[1] = L << 1 | H >>> 31;

    xor(D, x)(C, (x + 4) % 5, W, 0);

    for (let y = 0; y < 25; y += 5) {
      xor(A, y + x)(A, y + x, D, x);
    }
  }
};

export default theta;
