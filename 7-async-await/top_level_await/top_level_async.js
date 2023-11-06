
function getSpecificNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42), 3 * 1000);  // setTimout makes the function asynchronous
    });
}

// The following code now works because we added a "type" line to this folder's package.json file:
const number = await getSpecificNumber();
console.log(number);
