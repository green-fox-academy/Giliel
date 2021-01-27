'use strict';


window.addEventListener('load', () => {
  //loadTitles();
  loadBooks('/book');
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const category = document.getElementById('category').value;
  const publisher = document.getElementById('publisher').value;
  const pgt = document.getElementById('pgt').value;
  const plt = document.getElementById('plt').value;

  const params = { category: category, publisher: publisher, pgt: pgt, plt: plt };
  const endpointRequest = '/book' + formatParams(params);

  clearBookList();
  loadBooks(endpointRequest);
  form.reset();
});

function formatParams(params) {
  return '?' + Object
    .keys(params)
    .map(key => {
      return key + '=' + encodeURIComponent(params[key]);
    })
    .join('&');
}

function clearBookList() {
  const books = document.querySelectorAll('.book');
  books.forEach(book => book.remove());
}
