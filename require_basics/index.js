var fn = require('./myfile.js');
// specific file
fn();

var otherFn = require('./test').other;
// above is like saying require('./test/index.js') - it by default looks for index.js

otherFn();