
function getSpecificNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42), 4 * 1000);  // setTimout makes the function asynchronous
    });
}

async function f() {
    const number = await getSpecificNumber();
    console.log('async number is ' + number);
}

function traditional_without_async_await() {
    getSpecificNumber()
        .then(number => console.log('traditional number is ' + number));
}

f();

traditional_without_async_await();
