var assert = require('assert');
var util   = require('util');
var sha3   = require('../').SHA3Hash;

console.error(util.inspect((new sha3()).prototype));


describe('SHA3', function(){

  describe('constructor', function(){
    it('allows no hash length to be specified', function(){
      assert.doesNotThrow(function(){
        new sha3();
      });
    });

    it('allows omitting the new keyword', function(){
      assert.doesNotThrow(function(){
        sha3();
      });
    });

    it('accepts a number to its constructor', function(){
      assert.doesNotThrow(function(){
        new sha3(224);
      });
    });

    it('throws an error with an integer hashlen of 0', function(){
      assert.throws(function(){
        new sha3(0);
      }, "Unsupported hash length");
    });

    it('throws an error with any non-positive integer value', function(){
      assert.throws(function(){
        new sha3('hi');
      }, "Unsupported hash length");
      assert.throws(function(){
        new sha3(null);
      }, "Unsupported hash length");
      assert.throws(function(){
        new sha3(-1);
      }, "Unsupported hash length");
    });
  });

  describe('#update()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('#digest()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
