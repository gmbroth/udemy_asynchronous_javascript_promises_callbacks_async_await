
function calculateSquare(number, callback) {
    setTimeout(function () {
        if (typeof number !== 'number') {
            callback(new Error('Expected argument of type number, found ' + typeof number));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}


calculateSquare('9', (error, result) => {
    if (error !== null) {
        console.log('Caught error: ' + String(error));
        return;
    }
    console.log(result);
});
