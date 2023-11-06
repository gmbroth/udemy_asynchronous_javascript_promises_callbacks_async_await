
function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(value => console.log(value.message));
}

async function getRandomDogImage2() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let value = await response.json();
    console.log(value.message);
}

// getRandomDogImage();

getRandomDogImage2();


async function getRandomDogImage3() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    // let value = await response.json();
    // return await response.json();
    // await response.json();
    return response.json();
}

getRandomDogImage3().then(url => {
    console.log('url: ' + url);
});
