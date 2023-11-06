
const MAX_NUMBER = 27654321;

function generateNumbers() {
    const arrayOfNumbers = [];
    for (let i = 1; i <= MAX_NUMBER; ++i) {
        arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
}

function microtaskSolution() {
    let arrayOfNumbers = generateNumbers();
    const squareRoots = [];
    const BATCH_SIZE = 5 * 10000;

    function processBatch() {
        const batch = arrayOfNumbers.slice(0, BATCH_SIZE);
        arrayOfNumbers = arrayOfNumbers.slice(BATCH_SIZE);

        batch.forEach(number => {
            const sqRoot = Math.sqrt(number);
            squareRoots.push(sqRoot);
        });

        if (arrayOfNumbers.length > 0) {
            console.log('queuing next batch: ' + arrayOfNumbers.length);
            queueMicrotask(processBatch);
        }    
    }

    queueMicrotask(processBatch);
}

function microtaskPromiseSolution() {
    let arrayOfNumbers = generateNumbers();
    const squareRoots = [];
    const BATCH_SIZE = 5 * 10000;

    function processBatch() {
        const batch = arrayOfNumbers.slice(0, BATCH_SIZE);
        arrayOfNumbers = arrayOfNumbers.slice(BATCH_SIZE);

        batch.forEach(number => {
            const sqRoot = Math.sqrt(number);
            squareRoots.push(sqRoot);
        });

        if (arrayOfNumbers.length > 0) {
            console.log('queuing next batch: ' + arrayOfNumbers.length);
            // queueMicrotask(processBatch);
            Promise.resolve()
                .then(processBatch);
        }    
    }

    // queueMicrotask(processBatch);
    Promise.resolve()
        .then(processBatch);
}

microtaskSolution();
console.log('done');

