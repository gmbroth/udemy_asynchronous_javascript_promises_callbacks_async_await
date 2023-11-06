function calculateSquare(number, callback) {
    setTimeout(function () {
        if (typeof number !== 'number') {
            callback(new Error('Expected argument of type number, found ' + typeof number));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000 * 1);
};

module.exports = calculateSquare;
// export default calculateSquare;
