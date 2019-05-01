import copy from '../copy';
import rotate from '../rotate';
import xor from '../xor';

const theta0 = ({ A, C }) => {
  for (let x = 0; x < 5; x++) {
    console.log(`C${x * 2} = A${x * 2} ^ A${(x + 5) * 2} ^ A${(x + 10) * 2} ^ A${(x + 15) * 2} ^ A${(x + 20) * 2};`);
    console.log(`C${x * 2 + 1} = A${x * 2 + 1} ^ A${(x + 5) * 2 + 1} ^ A${(x + 10) * 2 + 1} ^ A${(x + 15) * 2 + 1} ^ A${(x + 20) * 2 + 1};`);
  }
};

const theta1 = ({ A, C, D, W }) => {
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
};

const theta = ({ A, C, D, W }) => {
  console.log('// theta');
  theta0({ A, C });
  theta1({ A, C, D, W });
};

export default theta;
