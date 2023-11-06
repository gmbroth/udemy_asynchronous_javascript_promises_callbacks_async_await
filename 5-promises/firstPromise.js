
const myPromise = new Promise((resolve, reject) => {
    resolve('hello, world');
});
// console.log(myPromise);

myPromise.then((value) => {
    console.log('value is: ' + value);
});
