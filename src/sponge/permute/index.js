import chi from './chi';
import iota from './iota';
import rhoPi from './rho-pi';
import theta from './theta';

const reset = (...arrays) => {
  for (const array of arrays) {
    array.fill(0);
  }
};

const permute = () => {
  // Intermediate variables
  const C = new Uint32Array(10);
  const D = new Uint32Array(10);
  const W = new Uint32Array(2);

  return (A) => {
    for (let roundIndex = 0; roundIndex < 24; roundIndex++) {
      theta({ A, C, D, W });
      rhoPi({ A, C, W });
      chi({ A, C });
      iota({ A, roundIndex });
    }
    reset(C, D, W);
  };
};

export default permute;
