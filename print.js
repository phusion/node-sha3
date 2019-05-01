const { Keccak } = require('./lib');

const inputData = Buffer.allocUnsafe(1);

inputData.fill(0x42);

new Keccak(256).update(inputData).digest('hex');
