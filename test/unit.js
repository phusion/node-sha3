const { describe, it } = require('mocha');
const assert = require('assert');
const { SHA3Hash: SHA3 } = require('../src');

const newBuffer = (input, encoding) => {
  try {
    return Buffer.from(input, encoding);
  } catch (error) {
    return new Buffer(input, encoding);
  }
};

describe('SHA3', () => {
  describe('constructor', () => {
    it('allows no hash length to be specified', () => {
      assert.doesNotThrow(() => new SHA3());
    });

    it('allows omitting the new keyword', () => {
      // eslint-disable-next-line new-cap
      assert.doesNotThrow(() => SHA3());
    });

    it('accepts a number to its constructor', () => {
      assert.doesNotThrow(() => [
        new SHA3(224),
        new SHA3(256),
        new SHA3(384),
        new SHA3(512)
      ]);
    });

    it('throws an error with an integer hashlen of 0', () => {
      assert.throws(() => new SHA3(0), 'TypeError: Unsupported hash length');
    });

    it('throws an error with an integer which is not a supported hash length', () => {
      assert.throws(() => new SHA3(225), 'TypeError: Unsupported hash length');
    });

    it('throws an error with any non-positive integer value', () => {
      assert.throws(() => new SHA3('hi'), 'TypeError: Unsupported hash length');
      assert.throws(() => new SHA3(null), 'TypeError: Unsupported hash length');
      assert.throws(() => new SHA3(-1), 'TypeError: Unsupported hash length');
    });
  });

  describe('#update()', () => {
    it('accepts a string as input', () => {
      const sha = new SHA3(224);
      assert.doesNotThrow(() => {
        sha.update('some string value');
      });
    });

    it('accepts a buffer as input', () => {
      const sha = new SHA3(224);

      const buffer = newBuffer('aloha', 'utf8');
      assert.doesNotThrow(() => {
        sha.update(buffer);
      });
    });

    it('does not accept any other types', () => {
      const sha = new SHA3(224);
      [1, 3.14, {}, []].forEach((arg) => {
        assert.throws(() => {
          sha.update(arg);
        }, 'TypeError: Not a string or buffer');
      });
    });
  });

  describe('#digest()', () => {
    it('supports hex encoding', () => {
      const result = '0eab42de4c3ceb9235fc91acffe746b29c29a8c366b7c60e4e67c466f36a4304c00fa9caf9d87976ba469bcbe06713b435f091ef2769fb160cdab33d3670680e';
      assert.equal(result, new SHA3().digest('hex'));
    });

    it('supports binary encoding', () => {
      const binary = new SHA3().digest('binary');
      assert.ok(binary);
      assert.ok(binary.length > 0);
    });

    it('defaults to binary encoding', () => {
      const binary = new SHA3().digest();
      assert.ok(binary);
      assert.ok(binary.length > 0);
    });

    it('does not support any other encoding', () => {
      assert.throws(() => {
        new SHA3().digest('buffer');
      }, 'TypeError: Unsupported output encoding');
    });

    it('incorporates the updates into the output', () => {
      const sha = new SHA3(224);
      assert.equal('f71837502ba8e10837bdd8d365adb85591895602fc552b48b7390abd', sha.digest('hex'));
      sha.update('some value');
      assert.equal('c6e8a28b9c677c4f5a1098cbc07454cdf7ba7dc4ee600a4655bec0a6', sha.digest('hex'));
    });
  });

  describe('chaining', () => {
    it('can chain', () => {
      assert.equal(
        '76a781712088f94b4f6ca4962f886cac1158bc2f79eabade5ff76d14',
        // eslint-disable-next-line new-cap
        SHA3(224).update('vlad').digest('hex')
      );
    });
  });
});
