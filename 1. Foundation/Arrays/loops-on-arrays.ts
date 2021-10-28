var characters = ['Lissy Bennet', 'Mr Darcy', 'Jane Bennet', 'Father', 'the Servant', 'dog'];

var numChar = characters.length;

// initialize; test; increment

for (let i = 0; i < characters.length; i++) {
    console.log(characters[i]);
}


//iterate
for (let i: number = 0; i < arr.length; i++) {
    console.log(`${i}: ${arr[i]}`);
}


//doing the loop backwards:
for (let i = characters.length - 1; i >= 0; i--) {
    console.log(characters[i]);
}



// nested loops (objects, arrays....)

let twoD = [[1, 2, 3, 4, 5, 5, 6], [8, 9, 10, 11, 12, 13], [14, 15, 16]];

let bigHero = {
    characters: [
        { name: 'Hiro', voice: 'Ryan Potter' },
        { name: 'Baymax', voice: 'Scott Adsit' },
        { name: 'Fred', voice: 'T.J.Miller' }
    ]
};

let rows = twoD.length;

for (let i = 0; i < rows; i++) {
    let items = twoD[i].length;
    console.log(i, items); // prints array nr + items nr in it

    for (let j = 0; j < items; j++) {
        console.log(twoD[i][j]);
    }
}


let chars = bigHero.characters
// or like this:
// let chars = bigHero['characters'];

for (let i = 0; i < chars.length; i++) {
    console.log(chars[i]);
    console.log(chars[i].name);
    console.log(chars[i]['voice']);
}


