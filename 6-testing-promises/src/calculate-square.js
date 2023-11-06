
function calculateSquare(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000 * 3);
    });
};

module.exports = calculateSquare;
