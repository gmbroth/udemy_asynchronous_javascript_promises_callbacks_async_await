
const calculateSquare = require('../src/calculate-square.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculateSquare', function () {
    this.timeout(4 * 1000);  // set the default timeout for all tests below
    it('should resolve with number 4 if passed number 2', function () {
        this.timeout(1000 * 4);  // increase Mocha's default 2 second timeout for this test only
        return expect(calculateSquare(2)).to.eventually.be.equal(4);
    });

    it('demonstrate notify "done" feature', function (done) {
        expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
    });

    it('should become fulfilled when passed number 2', function () {
        return expect(calculateSquare(2)).to.be.fulfilled;
    });

    it('should be rejected if passed a string', function () {
        return expect(calculateSquare('2')).to.be.rejected;
    });
})

