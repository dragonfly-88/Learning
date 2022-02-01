"use strict"

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method
// -  Print the fourth element as a test

let numbers: number[] = [1, 2, 3, 8, 5, 6]

let mapped: number[] = numbers.map((x) => (x === 8 ? (x = 4) : (x = x)))

console.log(mapped)

let stringArr = ["Anastasi", "Melani", "Amand"]
let newArr = stringArr.map(function (value) {
  return value + "a"
})

// alternative solution (easier to understand):

numbers = numbers.map((num, i) => {
  //just to learn
  return num === 8 ? 4 : num

  // if (num === 8) {
  //   return 4;
  // } else return num;
})

console.log(numbers[3])

// netes solution:
//  let mapped1: number[] = numbers.map(function (item, index, array) {
//    return item;;
//  });

// make array from Object:

var dog = { name: "Woody", type: "dog" }
var cat = { name: "Bob", type: "cat" }

var pets = [dog, cat]
console.log(pets)

//WDS

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
]

const itemNames = items.map((item) => {
  return item.price
})

console.log(itemNames)
