'use strict';

var nodehashes = require('./build/Release/nodehashes');

module.exports = (function() {
	return {
		RSHash : function(str) {
			return nodehashes.hash("RSHash", str);
		},
		JSHash: function(str) {
			return nodehashes.hash("JSHash", str);
		},
		PJWHash: function(str) {
			return nodehashes.hash("PJWHash", str);
		},
		ELFHash: function(str) {
			return nodehashes.hash("ELFHash", str);
		},
		BKDRHash: function(str) {
			return nodehashes.hash("BKDRHash", str);
		},
		SDBMHash: function(str) {
			return nodehashes.hash("SDBMHash", str);
		},
		DJBHash: function(str) {
			return nodehashes.hash("DJBHash", str);
		},
		DEKHash: function(str) {
			return nodehashes.hash("DEKHash", str);
		},
		BPHash: function(str) {
			return nodehashes.hash("BPHash", str);
		},
		FNVHash: function(str) {
			return nodehashes.hash("FNVHash", str);
		},
		APHash: function(str) {
			return nodehashes.hash("APHash", str);
		},
		MurmurHash3_x86_32: function(str, seed) {
			return nodehashes.murmurhash("MurmurHash3_x86_32", str, seed);
		},
        MurmurHash3_x86_128: function(str, seed) {
            return nodehashes.murmurhash("MurmurHash3_x86_128", str, seed);
        }
	};
})();



