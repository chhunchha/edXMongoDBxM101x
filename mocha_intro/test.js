// BDD - BEhaviour driven development
// Stories like
// need to use seprate assertion framework as it doesn't have its own 
// reportors - by default it uses spec reportor
// other reportors are dot x nyan

var assert = require('assert');

describe('my feature', function(){
    it('works', function() {
        assert.equal('A', 'A');
    });
    
    it('failes gracefully', function() {
        assert.throws(function() {
            throw 'Error!';
        });
    });
});

describe('my other features', function() {
   it('async', function(done) {
       setTimeout(function() {
           done();
       }, 25);
   }); 
});


// run it using command - ./node_modules/.bin/mocha test.js 
// -g flag is --grap - to execute only test with matching string like
// ./node_modules/.bin/mocha -g "fail" test.js
// ./node_modules/.bin/mocha -g "other" test.js


//running with reportor
// ./node_modules/.bin/mocha -g "fail" -R dot test.js
// ./node_modules/.bin/mocha -g "fail" -R xunit test.js
// ./node_modules/.bin/mocha -g "fail" -R nyan test.js