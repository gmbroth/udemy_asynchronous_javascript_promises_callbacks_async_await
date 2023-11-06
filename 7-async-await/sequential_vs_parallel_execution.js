
function printNumber1() {
    return new Promise((resolve, reject) => {
        console.log('printNumber1 is invoked');
        setTimeout(() => {
            console.log('printNumber1 is done');
            resolve(1);
        }, 4 * 1000);  // setTimout makes the function asynchronous
    });
}

function printNumber2() {
    console.log('printNumber2 is invoked');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNumber2 is done');
            resolve(2);
        }, 4 * 1000);  // setTimout makes the function asynchronous
    });
}

async function oneByOne() {
    const number1 = await printNumber1();
    const number2 = await printNumber2();
    console.log(number1, number2);
    console.log('oneByOne: ', number1, number2);
}

async function inParallel() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    // const number1 = await promise1;
    // const number2 = await promise2;

    // const [number1, number2] = [await promise1, await promise2];  // refactor using array destructuring
    // console.log('inParallel: ', number1, number2);

    console.log(await promise1, await promise2);  // refactor with only console.log
}

// oneByOne();
inParallel();
