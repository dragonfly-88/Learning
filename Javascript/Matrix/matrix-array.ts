//multidimensional arrays
// tömbön belül tömbök = mátrixok (2D-s tömbök pl. mint egy Excel tábla)

import { text } from "stream/consumers";

const matrix: number[][] = [
    [550, 220, 330],
    [110, 450, 600],
    [800, 700, 500]
];


//matrix for circle
for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}



let twoD = [[1, 2, 3, 4, 5, 5],
[6, 7, 8, 9],
[10, 11, 12, 13, 14, 15, 16, 17]
];


// nested for loop

let rows = twoD.length;
for (let i = 0; i < rows; i++) {
    let items = twoD[i].length;
    console.log(i, items)
    for (let j = 0; j < items; j++) {
        console.log(twoD[i][j]);
    }
}


// with objects & arrays:

let bigHero = {
    characters: [
        { name: 'Hero1', superpower: 'Flying' },
        { name: 'Superman', superpower: 'Strength' },
        { name: 'Samurai', superpower: 'Mental strength' }
    ]
};


let chars = bigHero.characters;

for (let i = 0; i < chars.length; i++) {
    console.log(chars[i]);
    console.log(chars[i].name);
    console.log(chars[i]['supoerpower']);

    for (let prop in chars[i]) {
        console.log(prop, chars[i][prop]);
    }
}

