
const promiseAny = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return Promise.reject(
            new AggregateError([], 'All promises were rejected'));
    }

    const errors = [];
    let rejectedPromisesCount = 0;

    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach((promise, index) => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }
            promise.then(value => {
                resolve(value);
            })
            promise.catch(reason => {
            try {
                rejectedPromisesCount += 1;
                errors[index] = reason;
                if (rejectedPromisesCount === arrayOfPromises.length) {
                    reject(
                        new AggregateError(errors, 'All promises were rejected')
                    );
                }
            } catch(error) {
                console.log('Caught an error: ' + error);
            }
            })
        })
    });
};

const askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('John'), 1000 * 5);
    });
};

const askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Eugene'), 1000 * 3); 
    });
};

const askSuzy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Suzy'), 1000 * 8);
    });
};

const askTheShop = () => {
    return Promise.resolve('Shop');
}

// promiseAny([askJohn(), askEugene(), askSuzy(),])
//     .then(value => {
//         console.log('Success: ' + value);
//     })
//     .catch(reason => {
//         console.log('Rejected: ' + reason);
//     });

Promise.any([askJohn(), askEugene(), askSuzy(),])
    .then(value => {
        console.log('Successs: ' + value);
    })
    .catch(reason => {
        console.log('Rejected: ' + reason);
    });
