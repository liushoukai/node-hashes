# node-hashes

[![node version][node-image]][node-url]
[![travis build][travis-image]][travis-url]
[![appveyor build][appveyor-image]][appveyor-url]
[![test coverage][coveralls-image]][coveralls-url]
[![npm version][npm-image]][npm-url]
[![npm downloads][downloads-image]][downloads-url]
[![Code Climate][codeclimate-image]][codeclimate-url]


> Some of the more common uses of hash functions.

## Hash Function Algorithms

> ### RS Hash Function
> A simple hash function from Robert Sedgwicks Algorithms in C book.

> ### JS Hash Function
> A bitwise hash function written by Justin Sobel.

> ### PJW Hash Functionh
> This hash algorithm is based on work by Peter J. Weinberger of AT&T Bell Labs.
> The book Compilers (Principles, Techniques and Tools) by Aho, Sethi and Ulman,
> recommends the use of hash functions that employ the hashing methodology found
> in this particular algorithm.

> ### ELF Hash Function
> Similar to the PJW Hash function, but tweaked for 32-bit processors.
> Its the hash function widely used on most UNIX systems.

> ### BKDR Hash Function
> This hash function comes from Brian Kernighan and Dennis Ritchie's book "The C Programming Language".
> It is a simple hash function using a strange set of possible seeds which all constitute a pattern of
> 31....31...31 etc, it seems to be very similar to the DJB hash function.

> ### SDBM Hash Function
> This is the algorithm of choice which is used in the open source SDBM project. The hash function
> seems to have a good over-all distribution for many different data sets. It seems to work well in
> situations where there is a high variance in the MSBs of the elements in a data set.

> ### DJB Hash Function
> An algorithm produced by Professor Daniel J. Bernstein and shown first to the world on the usenet
> newsgroup comp.lang.c. It is one of the most efficient hash functions ever published.

> ### DEK Hash Function
> An algorithm proposed by Donald E. Knuth in The Art Of Computer Programming Volume 3,
> under the topic of sorting and search chapter 6.4.

> ### AP Hash Function
> An algorithm produced by Arash Partow.

> ### BP Hash Function
> That code converts a (7-bit) ASCII string of at most (4 or 9) characters into a unique (32- or 64-)bit integer,
> depending on the platform.  If more characters are given, the first n-(5 or 10) characters are ignored,
> the low (4 or 1) bits of the next character are used, and the last (4 or 9) characters are used in full.  
> The code does not use the length of the string, so leading null characters are ignored.

> ### FNV Hash Function
> The basis of the FNV hash algorithm was taken from an idea sent as reviewer comments to the IEEE
> POSIX P1003.2 committee by Glenn Fowler and Phong Vo back in 1991.

## Benchmarks

|algorithm|benchmarks|
|---|---|---|
|RsHash  |RsHash(key) x 1,512,931 ops/sec ±0.92% (80 runs sampled)  |
|JSHash  |JSHash(key) x 1,541,553 ops/sec ±0.99% (80 runs sampled)  |
|PJWHash |PJWHash(key) x 1,344,942 ops/sec ±1.35% (80 runs sampled) |
|ELFHash |ELFHash(key) x 1,352,239 ops/sec ±1.11% (76 runs sampled) |
|BKDRHash|BKDRHash(key) x 1,364,106 ops/sec ±2.56% (68 runs sampled)|
|ELFHash |ELFHash(key) x 1,342,168 ops/sec ±1.12% (76 runs sampled) |
|SDBMHash|SDBMHash(key) x 1,338,767 ops/sec ±1.02% (76 runs sampled)|
|DJBHash |DJBHash(key) x 1,400,163 ops/sec ±1.89% (72 runs sampled) |
|DEKHash |DEKHash(key) x 1,310,762 ops/sec ±0.91% (82 runs sampled) |
|BPHash  |BPHash(key) x 1,360,768 ops/sec ±1.46% (78 runs sampled)  |
|FNVHash |FNVHash(key) x 1,235,105 ops/sec ±1.29% (77 runs sampled) |
|APHash  |APHash(key) x 1,193,078 ops/sec ±1.11% (80 runs sampled)  |



## Install
```
$npm install node-hashes --save
```

## Usage
```
var hashFn = require('node-hashes')
  , hash = hashFn.RSHash('foo')
  , hash = hashFn.JSHash('foo')
  , hash = hashFn.PJWHash('foo')
  , hash = hashFn.ELFHash('foo')
  , hash = hashFn.BKDRHash('foo')
  , hash = hashFn.SDBMHash('foo')
  , hash = hashFn.DJBHash('foo')
  , hash = hashFn.DEKHash('foo')
  , hash = hashFn.BPHash('foo')
  , hash = hashFn.FNVHash('foo')
  , hash = hashFn.APHash('foo')
  ;
```

## People

- [liushoukai](https://github.com/liushoukai) [![liushoukai's gratipay][gratipay-image-liushoukai]][gratipay-url-liushoukai]
- [List of all contributors](https://github.com/liushoukai/node-hashes/graphs/contributors)

## License

[![GitHub license][license-image]][license-url]



[node-image]: https://img.shields.io/badge/node.js-%3E=_0.11-brightgreen.svg?style=flat
[node-url]: http://nodejs.org/download

[npm-image]: https://img.shields.io/npm/v/node-hashes.svg
[npm-url]: https://npmjs.org/package/node-hashes

[downloads-image]: https://img.shields.io/npm/dm/node-hashes.svg
[downloads-url]: https://npmjs.org/package/node-hashes

[travis-image]: https://img.shields.io/travis/liushoukai/node-hashes/master.svg?label=linux
[travis-url]: https://travis-ci.org/liushoukai/node-hashes

[appveyor-image]: https://img.shields.io/appveyor/ci/liushoukai/node-hashes/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/liushoukai/node-hashes

[coveralls-image]: https://img.shields.io/coveralls/liushoukai/node-hashes/master.svg
[coveralls-url]: https://coveralls.io/r/liushoukai/node-hashes?branch=master

[gratipay-image-liushoukai]: https://img.shields.io/gratipay/liushoukai.svg
[gratipay-url-liushoukai]: https://gratipay.com/liushoukai/

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://raw.githubusercontent.com/liushoukai/node-hashes/master/LICENSE

[codeclimate-image]:https://codeclimate.com/github/liushoukai/node-hashes/badges/gpa.svg
[codeclimate-url]:https://codeclimate.com/github/liushoukai/node-hashes
