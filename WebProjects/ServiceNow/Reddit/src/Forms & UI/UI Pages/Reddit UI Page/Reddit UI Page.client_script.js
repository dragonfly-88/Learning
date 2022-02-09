// glide records
// DOM

// var content = document.getElementsByTagName("body");

// fetch the records from table
var record = new GlideRecord("x_722926_reddit_reddit_posts");
record.query();

var main = document.getElementById("main");


// iterate all records
while (record.next()) {

    var div = document.createElement("div");
    var number = document.createElement("div");
    var plus = document.createElement("a");
    var minus = document.createElement("a");
    var post_title = document.createElement("div");

    number.innerText = record.vote_count;
    post_title.innerText = record.title;
    plus.innerText = "+";
    minus.innerText = "-";

    div.append(number, plus, minus, post_title);
    main.append(div);
}


function increaseByOne() {

    var currentNumber = document.getElementsByName(number);
    currentNumber.setValue(++currentNumber);
    window.location.reload();
}

function decreaseByOne() {

    var currentNumber = document.getElementsByName(number);
    currentNumber.setValue(--currentNumber);
    window.location.reload();
}


function openNew() {
    window.open("https://dev109254.service-now.com/x_722926_reddit_reddit_posts.do");
}



document.getElementsByName("plus").addEventListener("click", increaseByOne);

document.getElementsByName("minus").addEventListener("click", decreaseByOne);

document.getElementsByClassName("submit").addEventListener("click", openNew);