import chi from './chi';
import iota from './iota';
import rhoPi from './rho-pi';
import theta from './theta';

const MAXIMUM_ROUNDS = 24;

const permute = () => {
  // Intermediate variables
  const C = new Uint32Array(10);
  const D = new Uint32Array(10);
  const W = new Uint32Array(2);

  return (A, roundCount = MAXIMUM_ROUNDS) => {
    for (let roundIndex = MAXIMUM_ROUNDS - roundCount; roundIndex < MAXIMUM_ROUNDS; roundIndex++) {
      theta({ A, C, D, W });
      rhoPi({ A, C, W });
      chi({ A, C });
      iota({ A, roundIndex });
    }
    C.fill(0);
    D.fill(0);
    W.fill(0);
  };
};

export default permute;
