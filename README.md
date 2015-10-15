# node-hashes
[![build status][travis-image]][travis-url]
[![node version][node-image]][node-url]
[![Dependency Status][david-image]][david-url]
[travis-image]: https://travis-ci.org/liushoukai/node-hashes.svg?branch=master
[travis-url]: https://travis-ci.org/liushoukai/node-hashes
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-brightgreen.svg?style=flat
[node-url]: http://nodejs.org/download/
[david-image]: https://david-dm.org/liushoukai/node-hashes.svg?style=flat
[david-url]: https://david-dm.org/liushoukai/node-hashes

Hash function algorithms for nodejs.

## Hash Function Algorithms

> ### RS Hash Function
> A simple hash function from Robert Sedgwicks Algorithms in C book.

> ### JS Hash Function
> A bitwise hash function written by Justin Sobel.

> ### PJ WHas Functionh
> This hash algorithm is based on work by Peter J. Weinberger of AT&T Bell Labs.
> The book Compilers (Principles, Techniques and Tools) by Aho, Sethi and Ulman,
> recommends the use of hash functions that employ the hashing methodology found
> in this particular algorithm.

> ### ELF Hash Function
> Similar to the PJW Hash function, but tweaked for 32-bit processors.
> Its the hash function widely used on most UNIX systems.

> ### BKDR Hash Function
>This hash function comes from Brian Kernighan and Dennis Ritchie's book "The C Programming Language".
>It is a simple hash function using a strange set of possible seeds which all constitute a pattern of
>31....31...31 etc, it seems to be very similar to the DJB hash function.

> ### SDBM Hash Function
>This is the algorithm of choice which is used in the open source SDBM project. The hash function
>seems to have a good over-all distribution for many different data sets. It seems to work well in
>situations where there is a high variance in the MSBs of the elements in a data set.

> ### DBJ Hash Function
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

## Install
```
$npm install node-hashes --save
```

## Usage
```
var hashFn = require('node-hashes');
hashFn.DBJHash('secret');
```
