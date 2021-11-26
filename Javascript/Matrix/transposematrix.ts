/*
Create a function transposeMatrix that takes a matrix as a parameter and returns the transpose of that matrix.
https://en.wikipedia.org/wiki/Transpose 
The original matrix should remain the same. Keep in mind that the matrices might not be square-shaped. 
It could be 4x3, 6x1, etc...
You can get some points if it works for square matrices but 
it needs to work for non-square matrices for full points.

Example 1
Input

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Output

[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]

*/


'use strict';

export function transposeMatrix(matrix: number[][]): number[][] {
    let transposedMatrix: number[][] = [];
    for (let i: number = 0; i < matrix[0].length; i++) {
        transposedMatrix.push([]);
    }

    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[i].length; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }

    return transposedMatrix;
}