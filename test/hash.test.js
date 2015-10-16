'use strict';

var should = require('chai').should()
  , nodehashes = require('../index')
  , key    = 'abcdefghijklmnopqrstuvwxyz1234567890'
  ;
 
nodehashes.RSHash(key).should.equal(4097835502);
nodehashes.JSHash(key).should.equal(1651003062);
nodehashes.PJWHash(key).should.equal(126631744);
nodehashes.ELFHash(key).should.equal(126631744);
nodehashes.BKDRHash(key).should.equal(3153586616);
nodehashes.SDBMHash(key).should.equal(3449571336);
nodehashes.DJBHash(key).should.equal(729241521);
nodehashes.DEKHash(key).should.equal(2923964919);
nodehashes.BPHash(key).should.equal(1726880944);
nodehashes.FNVHash(key).should.equal(3243095106);
nodehashes.APHash(key).should.equal(882643939);


