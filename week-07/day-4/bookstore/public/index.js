
function loadTitles() {

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = handleReadyStateChange;

  let method = 'GET';
  let endpoint = '/booktitle';
  xhr.open(method, endpoint);
  xhr.send();

  function handleReadyStateChange() {

    if (xhr.readyState === XMLHttpRequest.DONE) {
      let titles = JSON.parse(xhr.response);

      titles.forEach(title => {
        addTitleToList(title);
      });
    }
  }
}

const titleList = document.querySelector('#list');

function addTitleToList(title) {
  const row = document.createElement('li');
  row.innerHTML = title.book_name;
  titleList.appendChild(row);
}

function loadBooks(endpoint) {

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = handleReadyStateChange;

  let method = 'GET';
  xhr.open(method, endpoint);
  xhr.send();

  function handleReadyStateChange() {

    if (xhr.readyState === XMLHttpRequest.DONE) {
      let books = JSON.parse(xhr.response);

      books.forEach(book => {
        addBookToList(book);
      });
    }
  }
}

const bookList = document.querySelector('table');

function addBookToList(book) {
  const tr = document.createElement('tr');
  tr.setAttribute('class', 'book');

  const tdTitle = document.createElement('td');
  const tdAuthor = document.createElement('td');
  const tdCategory = document.createElement('td');
  const tdPublisher = document.createElement('td');
  const tdPrice = document.createElement('td');

  tdTitle.innerHTML = book.book_name;
  tdAuthor.innerHTML = book.aut_name;
  tdCategory.innerHTML = book.cate_descrip;
  tdPublisher.innerHTML = book.pub_name;
  tdPrice.innerHTML = book.book_price;

  tr.appendChild(tdTitle);
  tr.appendChild(tdAuthor);
  tr.appendChild(tdCategory);
  tr.appendChild(tdPublisher);
  tr.appendChild(tdPrice);

  bookList.appendChild(tr);
}
