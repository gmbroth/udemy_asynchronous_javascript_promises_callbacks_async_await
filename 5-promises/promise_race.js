
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

Promise.race([askJohn(), askEugene(), askSuzy(), askTheShop()])
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.log('Rejected: ' + reason);
    });
