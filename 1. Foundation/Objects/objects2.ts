

//Objects
//key csak egy lehet. key-property párok

let userList: any = {

    1: {
        username: 'matildka',
        password: 'pw1234',
    }
    2: {}
    3: {}
}
console.log(userList);

console.log(userList[1].username); // 1. kulcsra hivatkozunk, nem 1. elemre!
console.log(userList['email']);


let matildka1: any = {
    username: 'matildka';
    password: 'password',
    email: 'matildka@citromail.hu'
};

//kulcsokon valo vegigmenes
for (let kulcs in matildka1) {
    console.log(kulcs);
} // itt ne adjunk típist (string a kulcsnak!)


//ertekeken valo vegigmenes
Object.keys(matildka1).forEach(kulcs => {
    console.log(matildka1[kulcs]);
})


//érték hozzáadása
felhasznalok['email'] = 'kivulroljott@gmail.com';

console.log(felhasznalok[1].username);




