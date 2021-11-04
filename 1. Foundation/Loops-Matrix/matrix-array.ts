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




// Create a function named rotateMatrix that takes an n×n integer matrix (array of arrays) 
// as parameter and returns a matrix which elements are rotated 90 degrees clockwise


function rotateMatrix(matrix: number[][]): number[][] {

    matrix = matrix.reverse();


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];     // értéket cseréljük meg
            matrix[j][i] = temp;             // felülírtam a tempet
        }
    } return matrix;

}

let example: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotateMatrix(example));

/*

Expected Output:

[ [ 7, 4, 1 ],
  [ 8, 5, 2 ],
  [ 9, 6, 3 ]
]

*/



/*  matrix[i][j]

[1, 2, 3],  [i:0, j:0] [i:0, j:1] [i:0, j:2]
[4, 5, 6],  [i:1, j:0] [i:1, j:1] [i:1, j:2]
[7, 8, 9]   [i:2, j:0] [i:2, j:1] [i:2, j:2]

matrix[j][i]

[1, 2, 3],  [i:0, j:0] [i:1, j:0] [i:2, j:0]
[4, 5, 6],  [i:0, j:1] [i:1, j:1] [i:2, j:1]
[7, 8, 9]   [i:0, j:2] [i:1, j:2] [i:2, j:2]

*/



function textfromMatrix(matrix: string[][]): string {
    let output: stirng[] = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2 !== 0 && j % 2 !== 0) {
                output.push(matrix[i][j]);
            } else if (i % 2 === 0 && j % 2 === 0) {
                output.push(matrix[i][j]);
            }
        }
    } return output.join();
}

console.log(textfromMatrix([
    ["h", "p", "e"],
    ["k", "l", "a"],
    ["l", "m", "o"]
]));

// expected output: "hello"