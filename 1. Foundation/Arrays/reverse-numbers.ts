'use strict';

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`


var numbers: number[] = [3, 4, 5, 6, 7];

function reverseList(num: number[]): number[] {
    let temp = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        temp.push(numbers[i]);
    } return temp;
}

console.log(reverseList(numbers));
