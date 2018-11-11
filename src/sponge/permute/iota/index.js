import ROUND_CONSTANTS from './round-constants';
import xor from '../xor';

const iota = ({ A, roundIndex }) => {
  xor(A, 0)(A, 0, ROUND_CONSTANTS, roundIndex);
};

export default iota;
