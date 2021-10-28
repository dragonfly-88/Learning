// azért tesztelünk, h megbizonyosodjunk arról, h jó a kód (functional)
// non-functional testing: teljesítmény, usability, megbízhatóság stb.
// manuális tesztelés (manual testing) - dokumentáció, teszt esetek, milyen lépéseket hajtunk végre, mit csekkolunk
// automata tesztelés előnyei: gyorsaság, kevesebb hibalehetőség

// automata tesztelők: Unit, Integration, End-to-End || Unit, Service, UI
// Unit = 1 egység (pl. egy class, egy függvény)
// Integration: programon belül két részegység együttműködésének letesztelése

// hogyan írok tesztet?
// tesztfuttató eszközök pl. tape kell hozzá, de anélkül is lehet (írok rá egy függvényt külön)



npm--version // terminálban ezzel ellenőrzöm, fel van-e telepítve a node package manager

npm init  // abba a mappába, amiben akarok tesztelni  (package.json file)

npm i tape @types/tape / / i = install   // oda installálod, ahol használni akarod

// teszteket lehet írni projekt közben meg előtt is 



export default class BankAccount {

    private _balance: number;

    constructor() {
        this._balance = 1000;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            throw "You cannot deposit negative or zero";
        }

        this._balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            throw "You cannot deposit negative or zero";
        }
        if (amount > this._balance) {
            throw "You cannot go into negative balance";

            this._balance -= amount;
        }
    }

    public getBalance() {
        return this._balance;
    }
}


// .test.ts fájlba mentem, így tud a teszt lefutni
// beimportálom a tape-et

import test from "tape";
import BankAccount from "./BankAccount";


// teszt megírása

/// AAA principle: 



test('sanity test', function (t) {

    // Arrange = szedjük össze a változókat, osztályokat
    const num1 = 2;
    const num2 = 3;
    const expected = 5;
    // Act = elvégzek vmi műveletet
    const actual: number = num1 + num2;
    // Assert = mi lesz a művelet eredménye
    t.equal(actual, expected);
    t.notEqual(actual, 6);
    t.end(); // ezt mindig nyomjunk a végén! vagy az elején t.plan(num) - hány asszercióra számítunk

});


ts - node < file name > // git bash

    // ha pass, akkor érdemes megpróbálni 'eltörni' a kódot


    // #2

    test('BankAccount is instantiated with a 1000 balance', (t) => {
        const myBankAccount: BankAccount = new BankAccount();
        t.equal(myBankAccount.getBalance(), 1000);
        t.end();
    })


// #3

test('BankAccount deposit increases balance by amount', (t) => {
    const myBankAccount: BankAccount = new BankAccount();
    myBankAccount.deposit(120);
    t.equal(myBankAccount.getBalance(), 1120);
    t.end();
})


// #4

test('BankAccount deposit throws error on negative amount', (t) => {
    const myBankAccount: BankAccount = new BankAccount();
    myBankAccount.deposit(-120);
    t.throws(() => myBankAccount.deposit(-120));
    t.end();
})


// #5

test('BankAccount deposit decreases balance by amount', (t) => {
    const myBankAccount: BankAccount = new BankAccount();
    myBankAccount.withdraw(120);
    t.equal(myBankAccount.getBalance(), 880);
    t.end();



