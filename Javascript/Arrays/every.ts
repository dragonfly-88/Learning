const items4 = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
]

const hasOnlyInexpensiveItems = items4.every((item) => {
  return item.price <= 50
})
//returns false
