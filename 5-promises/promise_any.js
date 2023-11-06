
const askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('John'), 1000 * 5);
    });
};

const askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Eugene'), 1000 * 3); 
    });
};

const askSuzy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Suzy'), 1000 * 8);
    });
};


Promise.any([askJohn(), askEugene(), askSuzy(),])
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.log('Rejected: ' + reason);
    });
