
const promiseAllSettled = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return Promise.resolve([]);
    } 

    const promiseValues = [];

    let settledPromisesCount = 0;

    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach((promise, index) => {
            if (promise instanceof Promise === false) {
                // handle non-Promise arguments by promisifying them
                promise = Promise.resolve(promise);
            }
            promise.then(result => {
                settledPromisesCount += 1;
                promiseValues[index] = {
                    status: 'fulfilled',
                    value: result,
                };
                if (settledPromisesCount === arrayOfPromises.length) {
                    resolve(promiseValues);
                }
            }).catch(reason => {
                settledPromisesCount += 1;
                promiseValues[index] = {
                    status: 'rejected',
                    value: reason,
                };
                if (settledPromisesCount === arrayOfPromises.length) {
                    resolve(promiseValues);
                }
            });
        });
    });
};

const askFirstDealer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 1000 * 3);
    });
};

const askSecondDealer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Not a suitable car'), 5000);  // <== dealer rejects making an offer
        // setTimeout(() => resolve(12000), 5000);  
    });
};

const askThirdDealer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
};

promiseAllSettled([askFirstDealer(), askSecondDealer(), askThirdDealer(), 'howdy'])
    .then(prices => {
        console.log(prices);
    })
    .catch((error) => {
        console.log(error);
    });

