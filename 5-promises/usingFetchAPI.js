
/*
Here is your key: 5fedc7b6

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=5fedc7b6
*/

const fetchMovie = () => {
    fetch('https://www.omdbapi.com/?s=batman&apikey=5fedc7b6')  // fetch returns a Promise
        .then(response => response.json())  // json() returns a Promise
        .then(data => console.log(data));
}

fetchMovie();     
