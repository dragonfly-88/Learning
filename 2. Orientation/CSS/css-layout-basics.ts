/*

////////////////////////////////     Text styling      ////////////////////////////////


// text decoration

article{
    text-decoration: none;  // vagy: overline, inherit, underline, line-through
}


// Font Weight

h1{
    font-weight: bold;   // or normal, lighter, etc  400-600 normal range
}


// Text Transform

#header p{
    text-transform: capitalize    // or: none, full-width, inherit, lowercase, none, uppercase
}


// Styling Links

<a href="#">This is a link</a>
then: a{
    color: crimson;
    text-decoration: none;   // not underlined
    font-weight: bold;
}

// hovering style

a:hover{
    color:darkmagenta;
    text-decoration: underline;
    background-color: aquamarine;
}


// Letter Spacing & Line Height

p {
    letter-spacing: 2px;
    letter-spacing: 0.2em;  // em	Relative to the font-size of the element (2em means 2 times the size of the current font)
    word-spacing: 2px,
    line-height: 24px;   // ez lesz a betűk magassága
}


// Box Sizing

- box-sizing property was introduced in CSS3
- content-box, padding-box, and border-box


// Universal Box Sizing

*, *:before, *:after {
  box-sizing: border-box;
}


// Universal Box Sizing with Inheritance

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}


// If you need to support older versions of Safari (< 5.1), Chrome (< 10), and Firefox (< 29),
you should include the prefixes -webkit and -moz, like this:

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  }



////////////////////////////////     CSS positioning      ////////////////////////////////

// Box Model

border - margin - padding - element (height-width)

p, a {
    width: 50%;
    margin: 20px;
    padding: 30px;
    border: 2px solid #000;
    display: block; // hogy <a>-nál is működjön
}


// Block-level Elements

<div class="block">Block level element</div>  // will take up all the row's length


block level elements:
p, h1, h2, h3, ol, ul, pre, address, blockquote, dl, div, fieldset, form, hr, noscript, table

.block{
    padding: 10px;
    margin: 10px;
    border: 1px solid #000;
}


inline level elements:   // they don't occupie a whole row
pl. <span>

.inline{
    padding: 10px;
    margin: 10px;
    border: 1px solid #000;
    display: block      // ezzel megváltoztathatjuk block-levelre!!!!
    display: inline-block;   //
}


// Width & Height

.static-width{
    width: 300px;
    height: 100px;
}

.percentage-width{
    width: 70%;   // dynamic - kisebb device-ok miatt előnyös ezt használni
    height: 50x;
}

.inline-block{
    width: 40%;
    display: inline-block;
}



// Floating Elements

<img src="cloud.jpg" width="300">

img{
    float: left;
    margin: 10px;
}

-- ilyennel lehet weboldalakon a kis táblákat megcsinálni egymás mellé



// Clearing Floats

.content {
    padding: 10px;
    background: white;
    clear: both;   // both left and right floats
}


// hogyan csinálunk space-t a float tábláink alatt és a szövegünk fölött?

<div>
<div style="clear: both;"></div>
</div>

OR:

.services:after{
    content: "";
    display: bock;
    clear: both;
}



// Floating Columns

section, aside {
    float: left;
    width: 46%;
    padding: 1%;
    margin: 1%;
}


// to make space underneath:

.columns:after{
    display: blovk;
    content:"";
    clear: both;
}



// Text Columns (without floats)

.content p{
    -webkit-column-count: 3;
    column-count: 3;
    -webkit-column-gap: 50px;
    column-gap: 50px;
    -webkit-column-rule: 1px solid #ccc; (1px: rule width)
    column-rule: 1px solid #ccc;
    text-align: justify;
}



// Position Relative

- position properties: static, relative, absolute, fixed, inherit

.content {
    padding: 10px;
    clear: left;
    margin: 20px 1%;
    position: relative;  // we can offset the elements (we define where they should go)
    top: 5px;
}



// Absolute Position

#banner{
    max-height: 300px;
    overflow: hidden;
    margin: 1%;
    position: relative;
}


// hogyan rakjuk rá a szöveget a banner-re?

#banner h2{
    position: absolute;
    top: 30px;
    width: 100%;
    text-align: center;
    color: white;
}



// Fixed Position

pl. menüsor fixen mozog az oldallal

nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}



// Z - Index & Stacking Order       // ezt a videót majd még megnézni!

 nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1; // előrébb jelenik meg
}



// Clipping Content

pl. levágni a táblák alját, h egy vonalban végződjenek

.services {
    max-height: 150px;
    overflow: hidden;       // ezáltal a box méretét változtattuk, és ami lelóg, azt levágjuk
}




////////////////////////////////     CSS Flexbox      ////////////////////////////////


-- Flexbox is a CSS display type designed to help us craft CSS layouts much easier
-- control the position, size & spacing of elements relative to their parent elements & each other
-- works great responsively
-- we can create: nav bars, grid layouts, bar charts, equal height columns etc.
-- IE doesn't support it in all their versions  --> we can use Modernizr!!!


// Flex Containers

<div class="flex-container">
<div class="box one"></div>
<div class="box two"></div>
<div class="box three"></div>

--> in the CSS file:

.flex-container{
    display: flex;
}



// Flex Grow

.box{
    height: 100px;
    min-width: 100px;
    flex-grow: 100;     // ha van hely, töltsék ki a teret
}


vagy individálisan meghatározzuk, és akkor az arányok számítanak:

//  it's the rest of the space available (after their initial width) that is equally distributed

.one{
    background: red;
    flex-grow: 1;
}


.two{
    background: red;
    flex-grow: 2;
}



// Flex Shrink

.box{
    height: 100px;
    min-width: 960px;
}

.one{
    background: red;
    flex-shrink: 1;
}

.two{
    background: red;
    flex-grow: 2;
}







*/