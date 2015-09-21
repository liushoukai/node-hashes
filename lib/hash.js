'use strict';
/**
 * Hash Function Algorithms
 *
 * Thanks to Arash Partow who conributed to this implementation
 * http://www.partow.net/programming/hashfunctions/
 *  
 * @author liushoukai
 */
var HashFn = function() {
  
};

/**
 * RS Hash Function
 * 
 * A simple hash function from Robert Sedgwicks Algorithms in C book.
 * 
 * @param {[type]}
 */
HashFn.prototype.RSHash = function(str) {

    var b    = 378551;
    var a    = 63689;
    var hash = 0;
    
    for(var i=0; i<str.length; i++) {
        hash = hash * a + str.charAt(i).charCodeAt();
        a *= b;
    }

    return (hash & 0x7FFFFFFF);
};

/**
 * JS Hash Function
 * 
 * A bitwise hash function written by Justin Sobel.
 * 
 * @param {[type]}
 */
HashFn.prototype.JSHash = function(str) {

    var hash = 1315423911;

    for(var i=0; i<str.length; i++) {
        hash ^= ((hash << 5) + str.charAt(i).charCodeAt() + (hash >> 2));
    }

    return (hash & 0x7FFFFFFF);
};

/**
 * PJW Hash Function
 * 
 * This hash algorithm is based on work by Peter J. Weinberger of AT&T Bell Labs. 
 * The book Compilers (Principles, Techniques and Tools) by Aho, Sethi and Ulman, 
 * recommends the use of hash functions that employ the hashing methodology found 
 * in this particular algorithm.
 * 
 * @param {[type]}
 */
HashFn.prototype.PJWHash = function(str) {
    var BitsInUnsignedInt = 4 * 8;
    var ThreeQuarters     = BitsInUnsignedInt * 3 / 4;
    var OneEighth         = BitsInUnsignedInt / 8;
    var HighBits          = (0xFFFFFFFF) << (BitsInUnsignedInt - OneEighth);
    var hash              = 0;
    var test              = 0;

    for(var i=0; i<str.length; i++) {
        hash = (hash << OneEighth) + str.charAt(i).charCodeAt();
        if((test = hash & HighBits)  != 0) {
            hash = ((hash ^ (test >> ThreeQuarters)) & (~HighBits));
        }
    }

    return (hash & 0x7FFFFFFF);
};

/**
 * ELF Hash Function
 *  
 * Similar to the PJW Hash function, but tweaked for 32-bit processors. 
 * Its the hash function widely used on most UNIX systems.
 * 
 * @param {[type]}
 */
HashFn.prototype.ELFHash = function(str) {

    var hash = 0;
    var x    = 0;

    for(var i=0; i<str.length; i++) {
        hash = (hash << 4) + str.charAt(i).charCodeAt();
        if ((x = hash & 0xF0000000) != 0) {
            hash ^= (x >> 24);
        }
        hash &= ~x;
    }

    return (hash & 0x7FFFFFFF);
};


/**
 * BKDR Hash Function
 *
 * This hash function comes from Brian Kernighan and Dennis Ritchie's book "The C Programming Language". 
 * It is a simple hash function using a strange set of possible seeds which all constitute a pattern of 
 * 31....31...31 etc, it seems to be very similar to the DJB hash function.
 * 
 * @param {[type]}
 */
HashFn.prototype.BKDRHash = function(str) {

    var seed = 131; /* 31 131 1313 13131 131313 etc.. */
    var hash = 0;

    for(var i=0; i<str.length; i++) {
        hash = (hash * seed) + str.charAt(i).charCodeAt();
    }

    return (hash & 0x7FFFFFFF);
};


/**
 * SDBM Hash Function
 *
 * This is the algorithm of choice which is used in the open source SDBM project. The hash function 
 * seems to have a good over-all distribution for many different data sets. It seems to work well in 
 * situations where there is a high variance in the MSBs of the elements in a data set.
 * 
 * @param {[type]}
 */
HashFn.prototype.SDBMHash = function(str) {

    var hash = 0;

    for(var i=0; i<str.length; i++) {
        hash = str.charAt(i).charCodeAt() + (hash << 6) + (hash << 16) - hash;
    }

    return (hash & 0x7FFFFFFF);
};

/**
 * DJB Hash Function
 *
 * An algorithm produced by Professor Daniel J. Bernstein and shown first to the world on the usenet 
 * newsgroup comp.lang.c. It is one of the most efficient hash functions ever published.
 * 
 * @param {[type]}
 */
HashFn.prototype.DBJHash = function(str) {

    var hash = 5381;

    for(var i=0; i<str.length; i++) {
        hash = ((hash << 5) + hash) + str.charAt(i).charCodeAt();
    }

    return (hash & 0x7FFFFFFF);
};

/**
 * DEK Hash Function
 *
 * An algorithm proposed by Donald E. Knuth in The Art Of Computer Programming Volume 3, 
 * under the topic of sorting and search chapter 6.4.
 * 
 * @param {[type]}
 */
HashFn.prototype.DEKHash = function(str) {

    var hash = str.length;

    for(var i=0; i<str.length; i++) {
      hash = ((hash << 5) ^ (hash >> 27)) ^ (str.charAt(i).charCodeAt());
    }

    return (hash & 0x7FFFFFFF);
};

/**
 * AP Hash Function
 * 
 * An algorithm produced by Arash Partow.
 * 
 * @param {[type]}
 */
HashFn.prototype.APHash = function(str) {

    var hash = 0xAAAAAAAA;

    for(var i=0; i<str.length; i++) {
        hash ^= ((i & 1) == 0) ? ((hash <<  7) ^ (str.charAt(i).charCodeAt()) * (hash >> 3)) 
                               : (~((hash << 11) + ((str.charAt(i).charCodeAt()) ^ (hash >> 5))));
    }

    return (hash & 0x7FFFFFFF);
};

/**
 * BP Hash Function
 *
 * That code converts a (7-bit) ASCII string of at most (4 or 9) characters into a unique (32- or 64-)bit integer, 
 * depending on the platform.  If more characters are given, the first n-(5 or 10) characters are ignored, 
 * the low (4 or 1) bits of the next character are used, and the last (4 or 9) characters are used in full.  
 * The code does not use the length of the string, so leading null characters are ignored.
 * 
 * @param {[type]}
 */
HashFn.prototype.BPHash = function(str) {

   var hash = 0;

   for(var i=0; i<str.length; i++) {
      hash = hash << 7 ^ (str.charAt(i).charCodeAt());
   }

   return (hash & 0x7FFFFFFF);
};

/**
 * FNV Hash Function
 * 
 * The basis of the FNV hash algorithm was taken from an idea sent as reviewer comments to the IEEE 
 * POSIX P1003.2 committee by Glenn Fowler and Phong Vo back in 1991. 
 * 
 * @param {[type]}
 */
HashFn.prototype.FNVHash = function(str) {
   var fnv_prime = 0x811C9DC5;
   var hash      = 0;

   for(var i=0; i<str.length; i++) {
      hash *= fnv_prime;
      hash ^= (str.charAt(i).charCodeAt());
   }

   return (hash & 0x7FFFFFFF);
};


var hashFn = module.exports = new HashFn();
