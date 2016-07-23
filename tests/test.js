var assert = require('assert');
var leave = require('..');

describe('Printing a value and process.exit', function () {
    var logArguments;
    var exitCode;

    beforeEach(function(done) {
        
        console.print = console.log;
         
        console.log = function () {
            logArguments = Array.prototype.slice.call(arguments, 0);
            console.log = console.print;
        }
        
        process.exit = function (code) {
            exitCode = code;
            done();
        }
        
        leave(1);
    });
    
    it('Should print 1 and exit', function() {
        assert.equal(1, logArguments[0]);
        assert.equal(1, logArguments.length);
        assert.equal(0, exitCode);
    });
});

describe('Printing a value and process.exit', function () {
    var logArguments;
    var exitCode;

    beforeEach(function(done) {
        
        console.print = console.log;
         
        console.log = function () {
            logArguments = Array.prototype.slice.call(arguments, 0);
            console.log = console.print;
        }
        
        process.exit = function (code) {
            exitCode = code;
            done();
        }
        
        leave(1, 2 ,3, "123");
    });
    
    it('Should pass 1, 2, 3, "123" to console.log and exit', function() {
        assert.equal(1, logArguments[0]);
        assert.equal(2, logArguments[1]);
        assert.equal(3, logArguments[2]);
        assert.equal("123", logArguments[3]);
        assert.equal(4, logArguments.length);
        assert.equal(0, exitCode);
    });
});