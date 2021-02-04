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
  let elapsedTime = countElapsedTime(postDatas.timestamp);
  let username = 'Anonymus';

  if (postDatas.username) {
    username = postDatas.username;
  }

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

  const postScore = document.createElement('p');
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
  postSubmitted.innerHTML = `submitted ${elapsedTime} ago by ${username}`;
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

function countElapsedTime(timestamp) {
  let postDate = new Date(timestamp);
  let postDateValue = postDate.valueOf();

  let actualDateValue = Date.now();

  let minutes = Math.floor((actualDateValue - postDateValue) / 1000 / 60);

  let years = Math.floor(minutes / 60 / 24 / 365);
  let months = Math.floor(minutes / 60 / 24 / 30);
  let weeks = Math.floor(minutes / 60 / 24 / 7);
  let days = Math.floor(minutes / 60 / 24);
  let hours = Math.floor(minutes / 60);

  let elapsedTime = '';

  if (years > 0) {
    elapsedTime = `${years} ${(years === 1) ? 'year' : 'years'}`;
  } else if (months > 0) {
    elapsedTime = `${months} ${(months === 1) ? 'month' : 'months'}`;
  } else if (weeks > 0) {
    elapsedTime = `${weeks} ${(weeks === 1) ? 'week' : 'weeks'}`;
  } else if (days > 0) {
    elapsedTime = `${days} ${(days === 1) ? 'day' : 'days'}`;
  } else if (hours > 0) {
    elapsedTime = `${hours} ${(hours === 1) ? 'hour' : 'hours'}`;
  } else {
    elapsedTime = `${minutes} ${(minutes < 2) ? 'minute' : 'minutes'}`;
  }
  return elapsedTime;
}
