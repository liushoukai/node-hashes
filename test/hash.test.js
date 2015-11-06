'use strict';

var assert = require('assert');
var hashes = require('..');

var key = 'abcdefghijklmnopqrstuvwxyz1234567890';

describe('#RSHash()', function() {
  it('should return 4097835502 when the value is ' + key, function() {
    assert.equal(hashes.RSHash(key), 4097835502); 
  });
  
  it('should support empty string', function() {
    assert.equal(hashes.RSHash(), 1945558416);
  });
});

describe('#JSHash()', function() {
  it('should return 1651003062 when the value is ' + key, function() {
    assert.equal(hashes.JSHash(key), 1651003062);
  });

  it('should support empty string', function() {
    assert.equal(hashes.JSHash(), 798951460);
  });
});

describe('#PJWHash()', function() {
  it('should return 126631744 when the value is ' + key, function() {
    assert.equal(hashes.PJWHash(key), 126631744);
  });

  it('should support empty string', function() {
    assert.equal(hashes.PJWHash(), 180132084);
  });
});

describe('#ELFHash()', function() {
  it('should return 126631744 when the value is ' + key, function() {
    assert.equal(hashes.ELFHash(key), 126631744);
  });

  it('should support empty string', function() {
    assert.equal(hashes.ELFHash(), 180132084);
  });
});

describe('#BKDRHash()', function() {
  it('should return 3153586616 when the value is ' + key, function() {
    assert.equal(hashes.BKDRHash(key), 3153586616);
  });

  it('should support empty string', function() {
    assert.equal(hashes.BKDRHash(), 2688120636);
  });
});

describe('#SDBMHash()', function() {
  it('should return 3449571336 when the value is ' + key, function() {
    assert.equal(hashes.SDBMHash(key), 3449571336);
  });

  it('should support empty string', function() {
    assert.equal(hashes.SDBMHash(), 1353644592);
  });
});

describe('#DJBHash()', function() {
  it('should return 729241521 when the value is ' + key, function() {
    assert.equal(hashes.DJBHash(key), 729241521);
  });

  it('should support empty string', function() {
    assert.equal(hashes.DJBHash(), 3088032823);
  });
});

describe('#DEKHash()', function() {
  it('should return 2923964919 when the value is ' + key, function() {
    assert.equal(hashes.DEKHash(key), 2923964919);
  });

  it('should support empty string', function() {
    assert.equal(hashes.DEKHash(), 3428082349);
  });
});

describe('#BPHash()', function() {
  it('should return 1726880944 when the value is ' + key, function() {
    assert.equal(hashes.BPHash(key), 1726880944);
  });

  it('should support empty string', function() {
    assert.equal(hashes.BPHash(), 1832628964);
  });
});

describe('#FNVHash()', function() {
  it('should return 3243095106 when the value is ' + key, function() {
    assert.equal(hashes.FNVHash(key), 3243095106);
  });

  it('should support empty string', function() {
    assert.equal(hashes.FNVHash(), 1593695790);
  });
});

describe('#APHash()', function() {
  it('should return 882643939 when the value is ' + key, function() {
    assert.equal(hashes.APHash(key), 882643939);
  });

  it('should support empty string', function() {
    assert.equal(hashes.APHash(), 2931780395);
  });
});

