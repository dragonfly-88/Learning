let arr: string[] = []

arr.forEach((num) => {
  console.log(num)
})

arr.forEach((num, i) => {
  console.log(i, num)
})

let dwarves = ["Bifur", "Bofur", "Bombur", "Kili", "Gloin"]

dwarves.forEach(function (item, index, array) {
  console.log(index, item)
})

// WDS

const items2 = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
]

items2.forEach((item) => {
  console.log(item.name)
})
