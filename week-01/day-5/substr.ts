'use strict';

function substr(str: string, keyword: string): number {

  let startIndex: number = str.search(keyword);

  if (startIndex) {
    return startIndex;
  } else {
    return -1;
  }
}

console.log(substr("this is what I'm searching in", "searching"));
console.log(substr("this is what I'm searching in", "not"));