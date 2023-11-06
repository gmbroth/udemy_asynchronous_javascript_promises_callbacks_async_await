
function getSpecificNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42), 3 * 1000);  // setTimout makes the function asynchronous
    });
}

// The following code now works because the mjs extension means ecmascript module 
const number = await getSpecificNumber();
console.log(number);
