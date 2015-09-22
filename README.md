# node-hash-functions
[![build status][travis-image]][travis-url]
[![node version][node-image]][node-url]
[travis-image]: https://travis-ci.org/liushoukai/node-hash-functions.svg?branch=master
[travis-url]: https://travis-ci.org/liushoukai/node-hash-functions
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-brightgreen.svg?style=flat
[node-url]: http://nodejs.org/download/
 some good hash functions for strings, list below:
- RSHash
- JSHash
- PJWHash
- ELFHash
- BKDRHash
- SDBMHash
- DBJHash
- DEKHash
- APHash
- BPHash
- FNVHash

#Install
```
$npm install node-hash-functions --save
```
#Usage
```
var hashFn = require('node-hash-functions');
hashFn.DBJHash('secret');
```
