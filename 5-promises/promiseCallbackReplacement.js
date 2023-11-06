
function calculateSquare(number) {
    const promise = new Promise(function executor(resolve, reject) {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Expected argument of type number, found ' + typeof number));
            }
            const result = number * number;
            resolve(result);
        }, 1000 * 2);
    });
    return promise;
}

calculateSquare('3')
    .then(value => {
        console.log('Success: ' + value);
    }, reason => {
        console.log('Failure: ' + reason);
    });

