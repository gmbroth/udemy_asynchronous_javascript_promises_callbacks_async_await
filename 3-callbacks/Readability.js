
function fred() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
        }
    };
    xhr.send(null);
}

try {
    fred();
} catch (error) {
    console.log('Caught error: ' + String(error));
}
