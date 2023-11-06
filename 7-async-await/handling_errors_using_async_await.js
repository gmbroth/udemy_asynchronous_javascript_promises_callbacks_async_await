
// async function generateFailedPromise() {
//     let response = await fetch('https://wrong-host.com/wrong-url'); 
// }

// generateFailedPromise();

async function handleFailedPromiseUsingTryCatch() {
    try {
        const response = await fetch('https://wrong-host.com/wrong-url'); 
    } catch (e) {
        console.log('Traditional try-catch: ' + e);
    }
}

handleFailedPromiseUsingTryCatch();

async function handleFailedPromiseUsingDotCatch() {
    const response = await fetch('https://wrong-host.com/wrong-url'); 
}

handleFailedPromiseUsingDotCatch().catch(e => console.log('Dot catch: ' + e));
