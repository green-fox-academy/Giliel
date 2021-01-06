'use strict';

/* 1) replace the list items' content with items from this list:
    ['apple', 'banana', 'cat', 'dog']*/

const listContent = ['apple', 'banana', 'cat', 'dog'];

// replace solution 1
const listElements = document.getElementsByTagName('li');

for (let i = 0; i < listElements.length; i++) {
  listElements[i].innerText = listContent[i];
}

// replace solution 2
const list = document.querySelector('ul');

for (let i = 0; i < list.children.length; i++) {
  list.children[i].innerText = listContent[i];
}

// 2) change the <ul> element's background color to 'limegreen'
// solution 1
list.setAttribute('style', 'background: limegreen');

// solution 2
list.style.background = 'limegreen';

// - use css class to change the color instead of the style property
list.classList.add('limegreen');
