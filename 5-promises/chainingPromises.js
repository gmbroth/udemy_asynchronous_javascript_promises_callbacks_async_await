function calculateSquare(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Expected argument of type number, found ' + typeof number));
            }
            const result = number * number;
            resolve(result);
        }, 1000 * 2);
    });
};

// calculateSquare(3)
//     .then(value => {
//         console.log('value = ' + value);
//         return value;
//     })
//     .then(value2 => {
//         console.log('value2 = ' + value2);
//     });
 

// calculateSquare(3)
//     .then(value => {
//         console.log('value = ' + value);
//         throw new Error('demonstrates error handling in chained promises')
//         return value;
//     })
//     .then(value2 => {
//         console.log('value2 = ' + value2);
//     }, reason => {
//         console.log('Failure: ' + reason);
//     });


calculateSquare(3)
    .then(value => {
        console.log('value = ' + value);
        return calculateSquare(4);
    })
    .then(value2 => {
        console.log('value2 = ' + value2);
    }, reason => {
        console.log('Failure: ' + reason);
    });
        