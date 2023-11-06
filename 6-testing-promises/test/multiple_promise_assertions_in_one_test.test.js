
const calculateSquare = require('../src/calculate-square.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('multiple_promise_assertions_in_one_test', function () {
    this.timeout(4 * 1000);  // set the default timeout for all tests below
    it('should resolve with number 4 if passed number 2', function () {
        return calculateSquare(2).then(result => {
            expect(result).to.be.above(3);
            expect(result).to.be.equal(4);
        });
    });

    it('should return a rejected promise when passed a string', function () {
        return calculateSquare('2').catch(reason => {
            expect(reason).to.not.equal(null);
            expect(reason.message).to.equal('Argument of type number is expected');
        });
    });
   
    it('does this "combined" test make sense?', function () {
        return calculateSquare('2').then(result => {
            expect(result).to.be.above(3);
            expect(result).to.be.equal(4);
        }).catch(reason => {
            expect(reason).to.not.equal(null);
            expect(reason.message).to.equal('Argument of type number is expected');
        });
    });

})
