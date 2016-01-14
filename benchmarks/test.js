var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var hashes = require('..');

var key = 'abcdefghijklmnopqrstuvwxyz1234567890';

suite
.add('RsHash(key)', function() {
  hashes.RSHash(key);
})
.add('JSHash(key)', function() {
  hashes.JSHash(key);
})
.add('PJWHash(key)', function() {
  hashes.PJWHash(key);
})
.add('ELFHash(key)', function() {
  hashes.ELFHash(key);
})
.add('BKDRHash(key)', function() {
  hashes.BKDRHash(key);
})
.add('ELFHash(key)', function() {
  hashes.ELFHash(key);
})
.add('SDBMHash(key)', function() {
  hashes.SDBMHash(key);
})
.add('DJBHash(key)', function() {
  hashes.DJBHash(key);
})
.add('DEKHash(key)', function() {
  hashes.DEKHash(key);
})
.add('BPHash(key)', function() {
  hashes.BPHash(key);
})
.add('FNVHash(key)', function() {
  hashes.FNVHash(key);
})
.add('APHash(key)', function() {
  hashes.APHash(key);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': false });
