
let arr:string[] = [];


arr.forEach((num) => {
    console.log(num);
})


arr.forEach((num, i) => {
    console.log(i, num);
})


let dwarves = ['Bifur', 'Bofur', 'Bombur', 'Kili', 'Gloin'];


dwarves.forEach(function (item, index, array) {
    console.log(index, item);
})

