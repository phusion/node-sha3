var assert = require('assert');
var util   = require('util');
var SHA3 = require('../').SHA3Hash;

describe('SHA3', function(){

  describe('constructor', function(){
    it('allows no hash length to be specified', function(){
      assert.doesNotThrow(function(){
        new SHA3();
      });
    });

    it('allows omitting the new keyword', function(){
      assert.doesNotThrow(function(){
        SHA3();
      });
    });

    it('accepts a number to its constructor', function(){
      assert.doesNotThrow(function(){
        new SHA3(224);
        new SHA3(256);
        new SHA3(384);
        new SHA3(512);
      });
    });

    it('throws an error with an integer hashlen of 0', function(){
      assert.throws(function(){
        new SHA3(0);
      }, "Unsupported hash length");
    });

    it('throws an error with an integer which is not a supported hash length', function(){
      assert.throws(function(){
        new SHA3(225);
      }, "Unsupported hash length");
    });

    it('throws an error with any non-positive integer value', function(){
      assert.throws(function(){
        new SHA3('hi');
      }, "Unsupported hash length");
      assert.throws(function(){
        new SHA3(null);
      }, "Unsupported hash length");
      assert.throws(function(){
        new SHA3(-1);
      }, "Unsupported hash length");
    });
  });

  describe('#update()', function(){
    it('accepts a string as input', function(){
      var sha = new SHA3(224);
      assert.doesNotThrow(function(){
        sha.update('some string value');
      });
    });

    it('accepts a buffer as input', function(){
      var sha = new SHA3(224);
      var buffer = new Buffer('aloha');
      assert.doesNotThrow(function(){
        sha.update(buffer);
      });
    });

    it('does not accept any other types', function(){
      var sha = new SHA3(224);
      [1, 3.14, {}, []].forEach(function(arg){
        assert.throws(function(){
          sha.update(arg);
        }, "Not a string or buffer");
      });
    });
  });

  describe('#digest()', function(){
    it('supports hex encoding', function(){
      var result = "a69f73cca23a9ac5c8b567dc185a756e97c982164fe25859e0d1dcc1475c80a615b" +
                   "2123af1f5f94c11e3e9402c3ac558f500199d95b6d3e301758586281dcd26";
      
      assert.equal(result, new SHA3().digest('hex'));
    });

    it('supports binary encoding', function(){
      var binary = new SHA3().digest('binary');
      assert.ok(binary);
      assert.ok(binary.length > 0);
    });

    it('defaults to binary encoding', function(){
      var binary = new SHA3().digest();
      assert.ok(binary);
      assert.ok(binary.length > 0);
    });

    it('does not support any other encoding', function(){
      assert.throws(function(){
        new SHA3().digest('buffer');
      }, "Unsupported output encoding");
    });

    it('incorporates the updates into the output', function(){
      var sha = new SHA3(224);
      assert.equal('6b4e03423667dbb73b6e15454f0eb1abd4597f9a1b078e3f5b5a6bc7', sha.digest('hex'));
      sha.update('some value');
      assert.equal('25949fee5da8b0b51f1a1817e35230be9c34a9944d9c8b79d0ccff71', sha.digest('hex'));
    });
  });

  describe('chaining', function(){
    it('can chain', function(){
      assert.equal(
        'ef0f992d8bce9b7a31d8cd75983012f8bc9ecc605e1270ae92014e74',
        SHA3(224).update('vlad').digest('hex')
      );
    })
  });
});
