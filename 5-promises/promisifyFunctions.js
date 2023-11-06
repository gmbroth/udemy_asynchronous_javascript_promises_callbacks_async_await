
// You can promisify any function in JavaScript.

const capitalize = (text) => {
    return new Promise(function (resolve, reject) {
        if (typeof text !== 'string') {
            return reject(new Error('Argument must be a string'));
        }
        const result = text[0].toUpperCase() + text.substr(1);
        return resolve(result);
    });

    // return text[0].toUpperCase() + text.substr(1);
};

capitalize('now is the time')
    .then(value => {
        console.log('Success: ' + value);
    }, reason => {
        console.log('Failure: ' + reason);
    });

