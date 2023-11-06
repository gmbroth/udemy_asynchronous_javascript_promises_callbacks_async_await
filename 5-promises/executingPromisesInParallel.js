
const askFirstDealer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 1000 * 3);
    });
};

const askSecondDealer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12000), 5000);
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
    });
