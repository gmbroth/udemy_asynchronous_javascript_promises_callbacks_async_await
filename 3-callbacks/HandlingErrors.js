
function calculateSquare(number, callback) {
    setTimeout(function () {
        if (typeof number !== 'number') {
            throw new Error('Expected argument of type number');
        }
        const result = number * number;
        callback(result);
    }, 1000);
}

try {
    calculateSquare('9', (result) => {
        console.log(result);
    });
} catch (error) {
    console.log('Caught error: ' + String(error));
}
