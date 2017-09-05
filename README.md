# node-hashes

[![node version][node-image]][node-url]
[![travis build][travis-image]][travis-url]
[![appveyor build][appveyor-image]][appveyor-url]
[![test coverage][coveralls-image]][coveralls-url]
[![npm version][npm-image]][npm-url]
[![npm downloads][downloads-image]][downloads-url]
[![Code Climate][codeclimate-image]][codeclimate-url]


> Some of the more common uses of hash functions

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
> An algorithm produced by Arash Partow..

> ### BP Hash Function
> That code converts a (7-bit) ASCII string of at most (4 or 9) characters into a unique (32- or 64-)bit integer,
> depending on the platform.  If more characters are given, the first n-(5 or 10) characters are ignored,
> the low (4 or 1) bits of the next character are used, and the last (4 or 9) characters are used in full.
> The code does not use the length of the string, so leading null characters are ignored.

> ### FNV Hash Function
> The basis of the FNV hash algorithm was taken from an idea sent as reviewer comments to the IEEE
> POSIX P1003.2 committee by Glenn Fowler and Phong Vo back in 1991.

> ### MurmurHash3
> MurmurHash is a non-cryptographic hash function suitable for general hash-based lookup.It was created by Austin Appleby in 2008.It comes in 3 variants - a 32-bit version that targets low latency for hash table use and two 128-bit versions for generating unique identifiers for large blocks of data, one each for x86 and x64 platforms.

## Install
```
$npm install node-hashes --save
```

## Usage
```js
var hashes = require('node-hashes');
var ret = hashes.RSHash('foo');
```

```js
var hashes = require('node-hashes');
var seed = 32;
var ret = hashes.MurmurHash3_x86_128('foo', seed);
for (var i=0; i<ret.length; i++) {
    console.info(ret[i]);
}
```

## Benchmarks

> - RsHash(key) x 2,146,582 ops/sec ±0.36% (93 runs sampled)
> - JSHash(key) x 2,182,381 ops/sec ±0.35% (92 runs sampled)
> - PJWHash(key) x 1,926,879 ops/sec ±0.30% (93 runs sampled)
> - ELFHash(key) x 1,891,659 ops/sec ±0.38% (90 runs sampled)
> - BKDRHash(key) x 1,857,905 ops/sec ±0.64% (91 runs sampled)
> - ELFHash(key) x 1,894,290 ops/sec ±0.34% (89 runs sampled)
> - SDBMHash(key) x 1,912,925 ops/sec ±0.54% (90 runs sampled)
> - DJBHash(key) x 2,030,426 ops/sec ±0.23% (93 runs sampled)
> - DEKHash(key) x 1,913,679 ops/sec ±0.52% (92 runs sampled)
> - BPHash(key) x 1,970,864 ops/sec ±0.43% (91 runs sampled)
> - FNVHash(key) x 1,784,257 ops/sec ±0.51% (90 runs sampled)
> - APHash(key) x 1,780,209 ops/sec ±0.39% (92 runs sampled)
> - MurmurHash3_x86_32(key, 42) x 2,491,832 ops/sec ±0.42% (91 runs sampled)
> - MurmurHash3_x86_128(key, 42) x 580,621 ops/sec ±0.51% (91 runs sampled)
> - Fastest is MurmurHash3_x86_32(key, 42)

## Functions
> - RSHash(key);
> - JSHash(key);
> - PJWHash(key);
> - ELFHash(key);
> - BKDRHash(key);
> - SDBMHash(key);
> - DEKHash(key);
> - BPHash(key);
> - FNVHash(key);
> - APHash(key);
> - MurmurHash3_x86_32(key [,seed]);
> - MurmurHash3_x86_128(key [,seed]);

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
