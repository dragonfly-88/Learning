var beer_cost = 6.25;
var burger_cost = 4.75;
var pop_cost = 3.00;

//user's money
var account_balance = 15.75;

function drink_beer() {
    account_balance = account_balance - beer_cost;
    console.log(account_balance);
}

function drink_pop() {
    account_balance = account_balance - pop_cost;
    console.log(account_balance);
}

function eat_burger() {
    account_balance = account_balance - burger_cost;
    console.log(account_balance);
}


//visit the carnival, eat and drink

var mealList = [drink_beer, drink_pop, eat_burger, drink_beer];
function visitCarnival(mList) {
    for (let i = 0; num = mList.length; i < num; i++) {
        mList[i]();
    }
}

visitCarnival(mealList);




//another example
function greeter(name: string): string {    //második string: amit várunk return-be
    const returnStr: string = `Szia ${name}`;
    return returnStr;
}

console.log(greeter('Zoli'));
