'use strict';

for (let i: number = 0; i < 4; i++) {
  let penSpace: string = '% ';
  let spacePen: string = ' %';

  for (let j: number = 0; j < 3; j++) {
    penSpace += '% ';
    spacePen += ' %';
  }
  console.log(penSpace);
  console.log(spacePen);
}