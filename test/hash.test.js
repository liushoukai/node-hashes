'use strict';

var should = require('chai').should()
  , hashFn = require('../index')
  , key    = 'abcdefghijklmnopqrstuvwxyz1234567890'
  ;
hashFn.RSHash(key).should.equal(0);
hashFn.JSHash(key).should.equal(1825986044);
hashFn.PJWHash(key).should.equal(140307872);
hashFn.ELFHash(key).should.equal(140307872);
hashFn.BKDRHash(key).should.equal(0);
hashFn.SDBMHash(key).should.equal(1302087688);
hashFn.DBJHash(key).should.equal(729241521);
hashFn.DEKHash(key).should.equal(1091986242);
hashFn.APHash(key).should.equal(2141662520);
hashFn.BPHash(key).should.equal(1726880944);
hashFn.FNVHash(key).should.equal(868746288);



