
const promiseRace = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return new Promise((resolve, reject) => {});
    }

    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach(promise => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }

            promise.then(value => {
                resolve(value);
            });

            promise.catch(reason => {
                reject(reason);
            });
        });
    });
};

const askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('John'), 1000 * 5);
    });
};

const askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Eugene'), 1000 * 3); 
    });
};

const askSuzy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Suzy'), 1000 * 8);
    });
};

const askTheShop = () => {
    return Promise.resolve('Shop');
}

promiseRace([askJohn(), askEugene(), askSuzy(), askTheShop()])
    .then(value => {
        console.log('Success: ' + value);
    })
    .catch(reason => {
        console.log('Rejected: ' + reason);
    });
