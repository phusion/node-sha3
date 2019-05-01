import ROUND_CONSTANTS from './round-constants';

const iota = ({ A, roundIndex }) => {
  console.log('// iota');
  console.log(`A0 ^= ${ROUND_CONSTANTS[roundIndex * 2]};`);
  console.log(`A1 ^= ${ROUND_CONSTANTS[roundIndex * 2 + 1]};`);
};

export default iota;
