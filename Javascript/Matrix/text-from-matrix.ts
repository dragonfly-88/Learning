/*
Write a method which takes a 2D array / matrix containing letters and returns a text. 
The method creates the text from the letters found in the matrix.

Which letters to select:

from every odd row, select the letter found in the odd columns
from every even row, select the letter found in the even columns
The letters should be concatenated in this order: from left-top to right-bottom.

Example 2
Input

[
  ["h", "p", "e"],
  ["k", "l", "a"],
  ["l", "m", "o"]
]
Output

"hello"
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