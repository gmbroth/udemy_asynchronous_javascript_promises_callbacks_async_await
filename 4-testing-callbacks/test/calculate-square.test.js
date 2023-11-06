
const calculateSquare = require('../calculate-square.js');
const expect = require('chai').expect;

describe('calculateSquare', () => {
    it('should return 4 is passed 2', (done) => {
        calculateSquare(2, (error, result) => {
            console.log('callback is invoked');
            expect(result).to.equal(4);
            done();
        });
    });

    it('should return an error if passed a string', function(done) {
        calculateSquare('a string', function(error, result) {
            expect(error).to.not.equal(null);
            done();
        })
    });

});
