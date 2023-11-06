
const MAX_NUMBER = 27654321;

function generateNumbers() {
    const arrayOfNumbers = [];
    for (let i = 1; i <= MAX_NUMBER; ++i) {
        arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
}

function straightforwardSolution() {
    let arrayOfNumbers = generateNumbers();
    const squareRoots = [];
    arrayOfNumbers.forEach(number => {
        const sqRoot = Math.sqrt(number);
        squareRoots.push(sqRoot);
    });
}

function optimizedSolution() {
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
            setTimeout(processBatch, 0);
        }    
    }

    setTimeout(processBatch, 0);
}

// straightforwardSolution();
// console.log('done');

optimizedSolution();
console.log('done');

