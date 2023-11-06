
function logToConsole(somePromise) {
    // somePromise.then(value => console.log(value)).catch(error => console.log(error));
    somePromise.then(value => console.log(value), reason => console.log('reason = ' + reason));
}

const somePromise = new Promise(
    (resolve, reject) => resolve('Hello')
);

logToConsole(somePromise);

const value = 'this string is definitely not a Promise';
const promisifiedValue = Promise.resolve(value);

logToConsole(promisifiedValue);

const value2 = 'this is the rejected value';
const rejectedPromise = Promise.reject(value2);
logToConsole(rejectedPromise);

// const rejectedPromise2 = Promise.reject(new Error(value2));
// logToConsole(rejectedPromise2);

