'use strict';

const king = document.getElementById('b325');
console.log(king.innerHTML);

const businessLamp = document.getElementsByClassName('big');

for (let i = 0; i < businessLamp.length; i++) {
  console.log(businessLamp[i].innerHTML);
}

const conceitedKing = document.querySelectorAll('.container');
  alert(conceitedKing[0].children[0].innerHTML);
  alert(conceitedKing[0].children[1].innerHTML);

const noBusiness = document.querySelectorAll('.b329, .b326, #b325');

noBusiness.forEach(element => {
  console.log(element.innerHTML);
});
