
function calculateSquare(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000 * 1);
    });
};

calculateSquare(2)
    .then(value => {
        console.log(value);
        // throw new Error('Something went wrong');
        return calculateSquare(3);
    })
    .then(value => {
        // throw new Error('Something went wrong');
        return new Promise((resolve, reject) => {
            return reject(new Error('in place of a "throw", return a Promise reject result'));
        });
        console.log(value);
    }, reason => {
        console.log('error happened: ' + reason);
    })
    // .then(undefined, reason => {
    //     console.log('error happened 2: ' + reason);
    // });
    .catch(reason => {
        console.log('error happened 3: ' + reason);
    });

