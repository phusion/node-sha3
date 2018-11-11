import PI_SHUFFLES from './pi-shuffles';
import RHO_OFFSETS from './rho-offsets';
import copy from '../copy';
import rotate from '../rotate';

const rhoPi = ({ A, C, W }) => {
  copy(A, 1)(W, 0);

  for (let i = 0; i < 24; i++) {
    const j = PI_SHUFFLES[i];
    const r = RHO_OFFSETS[i];

    copy(A, j)(C, 0);
    copy(rotate(W, r), 0)(A, j);
    copy(C, 0)(W, 0);
  }
};

export default rhoPi;
