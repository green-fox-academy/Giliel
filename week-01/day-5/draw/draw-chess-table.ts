'use strict';

let penSpace: string = '% ';
let spacePen: string = ' %';

for (let i: number = 0; i < 3; i++) {
  penSpace += '% ';
  spacePen += ' %';
}
for (let j: number = 0; j < 4; j++) {
  console.log(penSpace);
  console.log(spacePen);
}