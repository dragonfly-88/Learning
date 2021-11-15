'use strict';

export function mergeMatrix(matrix1: number[][], matrix2: number[][]): number[][] {
    let greatestMatrix: number[][] = [];

    if (matrix1.length !== matrix2.length) {
        throw The matrices are not similar;
    }

    for (let i: number = 0; i < matrix1.length; i++) {
        greatestMatrix.push([]);
        for (let j: number = 0; j < matrix1.length; j++) {
            if (matrix1[i][j] >= matrix2[i][j]) {
                greatestMatrix[i][j] = matrix1[i][j];
            } else if (matrix1[i][j] < matrix2[i][j]) {
                greatestMatrix[i][j] = matrix2[i][j];
            }
        }
    }
    return greatestMatrix;
}