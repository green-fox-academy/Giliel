'use strict';

window.addEventListener('load', () => {
  getPosts();
});























const main = document.querySelector('main');

main.addEventListener('click', function (event) {

  const postId = event.target.parentElement.parentElement.getAttribute('id');
  const className = event.target.getAttribute('class');
  let changedClassName = className;

  if (className === 'upvote') {
    changedClassName = 'upvoted';
  } else if (className === 'upvoted') {
    changedClassName = 'upvote';
  } else if (className === 'downvote') {
    changedClassName = 'downvoted';
  } else if (className === 'downvoted') {
    changedClassName = 'downvote';
  }

  event.target.setAttribute('class', changedClassName);


});