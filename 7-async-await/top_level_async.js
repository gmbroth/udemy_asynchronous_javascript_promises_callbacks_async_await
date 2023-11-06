
function getSpecificNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42), 4 * 1000);  // setTimout makes the function asynchronous
    });
}

// The following code will throw a SyntaxError exception:
// const number = await getSpecificNumber();
// console.log(number);

(async function () {
    const number = await getSpecificNumber();
    console.log(number);
})();