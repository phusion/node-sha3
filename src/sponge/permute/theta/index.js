import copy from '../copy';
import rotate from '../rotate';
import xor from '../xor';

const theta0 = ({ A, C }) => {
  for (let x = 0; x < 5; x++) {
    xor(C, x)(A, x, A, x + 5, A, x + 10, A, x + 15, A, x + 20);
  }
};

const theta1 = ({ A, C, D, W }) => {
  for (let x = 0; x < 5; x++) {
    copy(C, (x + 1) % 5)(W, 0);
    xor(D, x)(C, (x + 4) % 5, rotate(W, 1), 0);

    for (let y = 0; y < 25; y += 5) {
      xor(A, y + x)(A, y + x, D, x);
    }
  }
};

const theta = ({ A, C, D, W }) => {
  theta0({ A, C });
  theta1({ A, C, D, W });
};

export default theta;
