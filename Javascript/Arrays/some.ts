const items3 = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
]

const hasInexpensiveItems = items3.some((item) => {
  return item.price <= 50
})

//returns true
