'use strict';

const posts = document.querySelector('main');

function getPosts() {

  fetch('/posts', {
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
      responseObjectToJson.rows.forEach(post => {
        loadNewPost(post);
      });
    })
    .catch(err => {
      console.log('error');
    });
}

function loadNewPost(postDatas) {
  console.log(postDatas.timestamp);

  const postCard = document.createElement('div');
  postCard.setAttribute('id', postDatas.post_id);
  postCard.setAttribute('class', 'postCard');
  posts.appendChild(postCard);

  const postVote = document.createElement('div');
  postVote.setAttribute('class', 'postVote');
  postCard.appendChild(postVote);

  const upvote = document.createElement('div');
  upvote.setAttribute('class', 'upvote');
  postVote.appendChild(upvote);

  const postScore = document.createElement('div');
  postScore.setAttribute('class', 'postScore');
  postScore.innerHTML = postDatas.score;
  postVote.appendChild(postScore);

  const downvote = document.createElement('div');
  downvote.setAttribute('class', 'downvote');
  postVote.appendChild(downvote);

  const post = document.createElement('div');
  post.setAttribute('class', 'post');
  postCard.appendChild(post);

  const postTitleLink = document.createElement('a');
  postTitleLink.setAttribute('class', 'postTitleLink');
  postTitleLink.setAttribute('href', postDatas.url);
  postTitleLink.innerHTML = postDatas.title;
  post.appendChild(postTitleLink);

  const postSubmitted = document.createElement('p');
  postSubmitted.setAttribute('class', 'postSubmitted');
  postSubmitted.innerHTML = `submitted ${postDatas.timestamp} ago`;
  post.appendChild(postSubmitted);

  const postLinkModify = document.createElement('a');
  postLinkModify.setAttribute('class', 'postLink');
  postLinkModify.setAttribute('href', './modify');
  postLinkModify.innerHTML = 'Modify';
  post.appendChild(postLinkModify);

  const postLinkRemove = document.createElement('a');
  postLinkRemove.setAttribute('class', 'postLink');
  postLinkRemove.setAttribute('href', './remove');
  postLinkRemove.innerHTML = 'Remove';
  post.appendChild(postLinkRemove);
}













