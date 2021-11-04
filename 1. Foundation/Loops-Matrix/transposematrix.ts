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