const { describe, it } = require('mocha');
const assert = require('assert');
const { Keccak, SHA3 } = require('../src');

const newBuffer = (input, encoding) => {
  try {
    return Buffer.from(input, encoding);
  } catch (error) {
    return new Buffer(input, encoding);
  }
};

const Algorithms = {
  Keccak,
  'SHA-3': SHA3
};

Object.keys(Algorithms).forEach((algorithm) => {
  const { [algorithm]: Hash } = Algorithms;

  describe(algorithm, () => {
    describe('#constructor()', () => {
      it('does not throw an error when not given a hash size', () => {
        assert.doesNotThrow(() => new Hash());
      });

      it('does not throw an error when called directly instead of constructed (although this is discouraged)', () => {
        // eslint-disable-next-line new-cap
        assert.doesNotThrow(() => Hash());
      });

      it('does not throw an error when given a hash size of 224', () => {
        assert.doesNotThrow(() => new Hash(224));
      });

      it('does not throw an error when given a hash size of 256', () => {
        assert.doesNotThrow(() => new Hash(256));
      });

      it('does not throw an error when given a hash size of 384', () => {
        assert.doesNotThrow(() => new Hash(384));
      });

      it('does not throw an error when given a hash size of 512', () => {
        assert.doesNotThrow(() => new Hash(512));
      });

      it('throws an error when given an unsupported hash size', () => {
        assert.throws(() => new Hash(1024), 'TypeError: Unsupported hash length');
      });

      it('throws an error when given an non-numeric hash size', () => {
        assert.throws(() => new Hash(null), 'TypeError: Unsupported hash length');
      });
    });

    describe('#update()', () => {
      it('does not throw an error when given a string', () => {
        assert.doesNotThrow(() => new Hash(224).update('example'));
      });

      it('does not throw an error when given a Buffer', () => {
        assert.doesNotThrow(() => new Hash(224).update(newBuffer('example', 'utf8')));
      });

      it('throws an error when given a floating point number', () => {
        assert.throws(() => new Hash(224).update(3.14), 'TypeError: Not a string or buffer');
      });

      it('throws an error when given an integer', () => {
        assert.throws(() => new Hash(224).update(1234567890), 'TypeError: Not a string or buffer');
      });

      it('throws an error when given an array', () => {
        assert.throws(() => new Hash(224).update(['hello', 'world']), 'TypeError: Not a string or buffer');
      });

      it('throws an error when given an object literal', () => {
        assert.throws(() => new Hash(224).update({ hello: 'world' }), 'TypeError: Not a string or buffer');
      });
    });

    describe('#digest()', () => {
      it('returns a string when given "hex" encoding', () => {
        assert.equal('string', typeof new Hash(512).digest('hex'));
      });

      it('returns a Buffer when given "binary" encoding', () => {
        assert.ok(Buffer.isBuffer(new Hash().digest('binary')));
      });

      it('returns a Buffer when not given an encoding', () => {
        assert.ok(Buffer.isBuffer(new Hash().digest()));
      });

      it('throws an error when given a bad value for encoding', () => {
        assert.throws(() => new Hash().digest('not-a-real-encoding'), 'TypeError: Unsupported output encoding');
      });

      it('returns a hash that incorporates input received since the previous digest', () => {
        const hash = new Hash(224);
        assert.notEqual(hash.update('hello').digest('hex'), hash.update('hello').digest('hex'));
      });
    });

    describe('#reset()', () => {
      it('initializes the hash to its default state', () => {
        const hash = new Hash(256);
        assert.equal(hash.reset().update('hello').digest('hex'), hash.reset().update('hello').digest('hex'));
      });
    });
  });
});



describe('SHA-3', () => {
});
