import PI_SHUFFLES from './pi-shuffles';
import RHO_OFFSETS from './rho-offsets';
import copy from '../copy';
import rotate from '../rotate';

const rhoPi = ({ A, C, W }) => {
  console.log('// rho-pi');
  console.log(`W0 = A2;`);
  console.log(`W1 = A3;`);

  for (let i = 0; i < 24; i++) {
    const j = PI_SHUFFLES[i];
    const r = RHO_OFFSETS[i];

    console.log(`C0 = A${j * 2};`);
    console.log(`C1 = A${j * 2 + 1};`);
    console.log('H = W0;');
    console.log('L = W1;');
    console.log(`W0 = H << ${r} | L >>> ${32 - r};`);
    console.log(`W1 = L << ${r} | H >>> ${32 - r};`);
    console.log(`A${j * 2} = W0;`);
    console.log(`A${j * 2 + 1} = W1;`);
    console.log(`W0 = C0;`);
    console.log(`W1 = C1`);
  }
};

export default rhoPi;
