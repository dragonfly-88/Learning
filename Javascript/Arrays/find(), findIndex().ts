"use strict"

let cities = ["London", "Istambul", "Budapest", "Vienna", "New York"]

let city = "New York"
let chars = 7

let match1 = cities.find((item) => {
  if (city === item) return true
})

console.log(`Item from cities that matched was: ${match1}`)

let match2 = cities.find((item) => chars === item.length)
console.log(`Item with matching length at position: ${match2}`)

let index = cities.findIndex(
  (item) => item.toLocaleLowerCase().indexOf("t") > 1
)

console.log(`Letter "t" found in item at index ${index}`)

// ha több item lesz, filer() jobb method erre, mert mindet ki fogja printelni

//WDS

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
]

const foundItem = items.find((item) => {
  return item.name === "Book"
})

// expected output: {name:'Book', price:5}
