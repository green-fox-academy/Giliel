'use strict';

const jokes = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  getFetchApi('http://api.icndb.com/jokes/random');
});

function getFetchApi(URL) {
  fetch(URL, {
    method: 'GET'
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('no response');
      }
      return response;
    })
    .then(response => response.json())
    .then(responseObjectToJson => {
      addNewJoke(responseObjectToJson.value.joke);
    })
    .catch(err => {
      console.log('error');
    });
}

function addNewJoke(jokeText) {
  const joke = document.createElement('p');
  joke.innerText = jokeText;
  jokes.appendChild(joke);
}
