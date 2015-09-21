# node-hash-functions
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