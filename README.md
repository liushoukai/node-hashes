# node-hash-functions
[![build status][travis-image]][travis-url]
[![node version][node-image]][node-url]
[![Dependency Status][david-image]][david-url]
[travis-image]: https://travis-ci.org/liushoukai/node-hash-functions.svg?branch=master
[travis-url]: https://travis-ci.org/liushoukai/node-hash-functions
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-brightgreen.svg?style=flat
[node-url]: http://nodejs.org/download/
[david-image]: https://david-dm.org/liushoukai/node-hash-functions.svg?style=flat
[david-url]: https://david-dm.org/liushoukai/node-hash-functions
__some good hash functions for strings, list below:__

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
