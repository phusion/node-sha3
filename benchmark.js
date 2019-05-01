const { Keccak } = require('./lib');

const inputData = Buffer.allocUnsafe(4096);

inputData.fill(0x42);

const before = new Date().getTime();
for (let i = 0; i < 1000; i++) {
  new Keccak(256).update(inputData).digest('hex');
}
const after = new Date().getTime();

console.log(after - before);
