'use strict';

function xChanger(text: string): string {
  if (text.length === 0) {
    return '';
  }
  return text.substr(0, 1).replace('x', 'y') + xChanger(text.substr(1, (text.length)));
}

console.log(xChanger('So much X and x: XXxxxXXXxxxXXXxxxXX'));

// An other solution
function xChangerV2(text: string): string {
  if (text.search('x') === -1) {
    return text;
  }
  return xChangerV2(text.replace('x', 'y'));
}

console.log(xChangerV2(`Change only lowercase X's: TxpeScript’s txpe inference means that xou don’t have to annotate xour code until xou want more safetx. Xmas is coming...`));
