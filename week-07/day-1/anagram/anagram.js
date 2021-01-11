'use strict';

function isAnagram(text1, text2) {
  return text1 != text2 && text1.replace(/ /g, '').split('').sort().toString() === text2.replace(/ /g, '').split('').sort().toString();
}

module.exports = isAnagram;
