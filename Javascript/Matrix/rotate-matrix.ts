
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