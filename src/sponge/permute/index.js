import PI_SHUFFLES from './rho-pi/pi-shuffles';
import RHO_OFFSETS from './rho-pi/rho-offsets';
import ROUND_CONSTANTS from './iota/round-constants';

const permute = () => (A) => {
  console.log(`export default () => (A) => {`)

  for (let i = 0; i < 50; i++) {
    console.log(`let A${i} = A[${i}];`);
  }

  for (let i = 0; i < 10; i++) {
    console.log(`let C${i} = 0;`);
    console.log(`let D${i} = 0;`);
  }

  for (let i = 0; i < 2; i++) {
    console.log(`let W${i} = 0;`);
  }

  console.log(`let H = 0;`);
  console.log(`let L = 0;`);

  for (let roundIndex = 0; roundIndex < 24; roundIndex++) {
    console.log(`// round ${roundIndex}`);

    console.log('// theta');

    for (let x = 0; x < 5; x++) {
      console.log(`C${x * 2} = A${x * 2} ^ A${(x + 5) * 2} ^ A${(x + 10) * 2} ^ A${(x + 15) * 2} ^ A${(x + 20) * 2};`);
      console.log(`C${x * 2 + 1} = A${x * 2 + 1} ^ A${(x + 5) * 2 + 1} ^ A${(x + 10) * 2 + 1} ^ A${(x + 15) * 2 + 1} ^ A${(x + 20) * 2 + 1};`);
    }

    for (let x = 0; x < 5; x++) {
      console.log(`W0 = C${(x + 1) % 5};`);
      console.log(`W1 = C${(x + 1 & 5) + 1};`);
      console.log('H = W0;');
      console.log('L = W1;');
      console.log(`W0 = H << 1 | L >>> 31;`);
      console.log(`W1 = L << 1 | H >>> 31;`);
      console.log(`D${x * 2} = C${(x + 4) % 5 * 2} ^ W0;`);
      console.log(`D${x * 2 + 1} = C${(x + 4) % 5 * 2 + 1} ^ W1;`);

      for (let y = 0; y < 25; y += 5) {
        console.log(`A${(y + x) * 2} ^= D${x * 2};`);
        console.log(`A${(y + x) * 2 + 1} ^= D${x * 2 + 1};`);
      }
    }

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

    console.log('// chi');

    for (let y = 0; y < 25; y += 5) {
      for (let x = 0; x < 5; x++) {
        console.log(`C${x * 2} = A${(y + x) * 2};`);
        console.log(`C${x * 2 + 1} = A${(y + x) * 2 + 1};`);
      }

      for (let x = 0; x < 5; x++) {
        const xy = (y + x) * 2;
        const x1 = (x + 1) % 5 * 2;
        const x2 = (x + 2) % 5 * 2;

        console.log(`A${xy} ^= ~C${x1} & C${x2};`);
        console.log(`A${xy + 1} ^= ~C${x1 + 1} & C${x2 + 1};`);
      }
    }

    console.log('// iota');

    console.log(`A0 ^= ${ROUND_CONSTANTS[roundIndex * 2]};`);
    console.log(`A1 ^= ${ROUND_CONSTANTS[roundIndex * 2 + 1]};`);
  }

  for (let i = 0; i < A.length; i++) {
    console.log(`A[${i}] = A${i};`);
  }

  console.log(`};`)
};

export default permute;
