'use strict';

import { transposeMatrix } from "./transposematrix";

let test = require('tape');

test('Testing for square matrix', (t: any) => {
    const actual: number[][] = transposeMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const expected: number[][] = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ];

    t.deepEqual(actual, expected);
    t.end();
});

test('Testing for non-square matrix', (t: any) => {
    const actual: number[][] = transposeMatrix([
        [5, 9, 3, 7],
        [3, 2, 1, 8]
    ]);
    const expected: number[][] = [
        [5, 3],
        [9, 2],
        [3, 1],
        [7, 8]
    ];

    t.deepEqual(actual, expected);
    t.end();
});

test('Testing for one row matrix', (t: any) => {
    const actual: number[][] = transposeMatrix([
        [5, 9, 3, 7]
    ]);
    const expected: number[][] = [
        [5],
        [9],
        [3],
        [7]
    ];

    t.deepEqual(actual, expected);
    t.end();
});