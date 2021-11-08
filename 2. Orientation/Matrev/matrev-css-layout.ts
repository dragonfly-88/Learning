/*

caniuse.com - supporting browsers check

getbootstrap.com   // css, html modulok, package-ek (de ezeket még orientation alatt nem használjuk)


// text decor

<em><em> // dőlt betű

.first {
    fonr-weight: bold;  // vagy: font-weight: 600;
    text-decoration-line: underline;
    text-decoration-style: dotted;
    padding: 5px 5px 5px 5px;  / de: padding: 5px -- ezt tudja, h mindre vonatkozik !!!
    text-transform: uppercase;
}


// shorthand property 


// block: nem tudsz mást odatenni mellé, inline-nál tudsz - felveszi az egész területet
// inline-block:  meg tudod mondani neki, milyen széles / magas legyen


<div id="block">BLOCK</div>
<div id="inline">INLINE</div>
<div id="inline-block">INLINE-BLOCK</div>

div {
    border: 1px solid black;
    margin: 10 px;
}


#inline {
    display: inline;
    height: 50px;  // mivel inline, nem fog megváltozni a magassága és szélessége! hiába írjuk be
}

#inline-block {
    display:inline-block;  
    height: 50px;   // ez fel tud venni magasságot
}



// box model

#inline-block{
    box-sizing: border-box;
    box.sizing: content-box // alapértelmezett modell 
    pl kép mérete ennyit vehet fel
}


float // 
van egy dokumentum flow, hogyan követik egyást az elemek
float -- különálló elemet készít, megtörik a doc flow


// relative, absolute, fixed

position: relative;
top: 50%;   // fentihez képest lejjebb tolja


fixed - pl navigation bar

nav {
    position: fixed;
    width: 100%;
}



// flexbox

container elemet kell létrehoznom először
 

<body>
<main>


main {
display: flex;
flex-wrap: wrap;
}


// view height
height: 100 vh;  -- oldal magassága



*/

