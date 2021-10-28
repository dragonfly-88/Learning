/*
var dog = { 'name': 'Woody', 'type': 'dog' };
var cat = { 'name': 'Bob', 'type': 'cat' };

var pets = [
    { "name": "Woody", "type": "dog" },
    { "name": "Bob", "type": "cat" }
];

pets.push({ "name": "Roxy", "type": "dog" });

pets[0].age = 3;
pets[1]["age"] = 2;
console.log(pets); */


// Object.keys, Object.values, Object.entries

let jake = {
    firstName: 'XY',
    lastName: 'XXYY',
    age: 30,
    city: 'London',
    profession: 'Data Science Specialist'
};

// iterable, forEach(), filter(), map(), reduce()

let keys = Object.keys(jake);
let values = Object.values(jake);
let entries = Object.entries(jake); // gives back both the keys and values

console.log(keys);  // csak kulcsok
console.log(values);  // csak értékek
console.log(entries);  // minden, ami benne van


// property 0 is the key, 1 is the value !!!!!!!!!!!!!!!!!


// console.log(entries[2][1]);


// for .. in loop
// on objects which don't have a length property:
// var in object

/*
for (let prop in jake) {
    //   console.log(prop);  // prints the propoerties
    //  console.log( jake[prop] );
    console.log("In", prop, "we have the", jake[prop]);
}*/


/*
let nameLengths = dwarves.map(function (item, index, array) {
    return item;
});
*/


let userlist: any = {

    1: { name: 'Marika', userid: 'marishka345', email: 'maris123@gmail.com' },
    2: { name: 'Benny', userid: 'benji76', email: 'benjamin54@info.hu' },
    3: { name: 'Tommy', userid: 'tom4567', email: 'bravetom@gmail.com' }
};

/*
let mykeys = Object.keys(userlist);
let myvalues = Object.values(userlist);
let myentries = Object.entries(userlist);


console.log(mykeys);
console.log(myvalues);
console.log(myentries);


//console.log(userList[1].name);
// expected output: 'Marika'*/


//ertekeken(values) valo vegigmenes


Object.keys(userlist).forEach(key => {
    console.log(userlist[key]);

});

// output: 
/*
{ name: 'Marika', userid: 'marishka345', email: 'maris123@gmail.com' }
{ name: 'Benny', userid: 'benji76', email: 'benjamin54@info.hu' }
{ name: 'Tommy', userid: 'tom4567', email: 'bravetom@gmail.com' }  */
