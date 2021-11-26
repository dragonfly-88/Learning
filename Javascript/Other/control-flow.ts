// conditional

if (2 > 1) {
    console.log('hello there!');
}
if (2 < 1) {
    console.log('hi');
} else {
    console.log('else');
}


// for circle
for (let i = 0; i < 10; i++) {
    console.log('hello multiple times: ' + (i));
}


// while
let index: number = 0;

while (index < 10) {
    console.log('hello hello');
    if (index === 9) break;
    index++;
}


// do while - egyszer mindenképp lefut ("hátul tesztelős módszer")

do {
    console.log("hello do while");
} while (false);


// continue - ugorjon át egy kört

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
}
console.log('hello from skipping');


// switch

let num4: number = 7;
switch (num4) {
    case 7:
        console.log('dwarves');
        break;
    case 3:
        console.log('body guard');
        break;
    case 12:
        console.log('evils');
        break;
    default: console.log('protagonist');
}


console.log('--------------------');