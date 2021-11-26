
let str = 'Green Fox Academy is a cool coding place';

let regExp1 = /co[a-z]*/g;

console.log(str.match(regExp1));
// Output: [ 'cool', 'coding' ]


let regExp2 = new RegExp('co[a-z]*', 'g');

console.log(str.match(regExp2));
// Output: [ 'cool', 'coding' ]







/*


let reg1 = /ab+c/;

let reg2 = new RegExp('ab+c');

var myRe = new RegExp('d(b+)d', 'g');

string.match(regExp)

function doSearch(myValue:string):void {
    let reg = new RegExp(document.getElementById('find').value, 'g');
    let txt = document.querySelector('.content').textContent;
    let output = document.querySelector('.output');
    if (reg.test(txt)) {
        output.textContent = 'Found a match';
    } else {
        output.textContent = 'Not found';
    }
}


<script>
 
 // initializing function to demonstrate match()
 // method with "g" para
 function matchString() {
     var string = "Welcome to geeks for geeks";
     var result = string.match(/eek/g);
     document.write("Output : " + result);
 } matchString();
  
</script>    

*/