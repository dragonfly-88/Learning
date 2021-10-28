let names = ['Alex', 'Bree', 'Cara', 'Daniel'];
let numbers = [123, 234, 345, 456, 567];


//simple function syntax
let big = numbers.filter(function (item) {
    return item > 300;
});

// arrow function version

let bigA = numbers.filter(item => item > 300);


names.forEach(function (item, index) {
    console.log(index, item);
})

names.forEach((item, index) => console.log(index, item));

