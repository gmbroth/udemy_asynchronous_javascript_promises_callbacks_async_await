
const askFirstDealer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 1000 * 3);
    });
};

const askSecondDealer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Not a suitable car'), 5000);  // <== dealer rejects making an offer
    });
};

const askThirdDealer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
};

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => {
        console.log(prices);
    })
    .catch((error) => {
        console.log(error);
    });


Promise.all([
    askFirstDealer().catch(error => { return error; }), // <-- construct allowing one promise to error
    askSecondDealer().catch(error => { return error; }),
    askThirdDealer().catch(error => { return error; }),
])
    .then(prices => {
        console.log(prices);
    })
    .catch((error) => {
        console.log(error);
    });

