/*

////////////////////////////////////////      HTML      ////////////////////////////////////////


HTML = leíró nyelv, nem tudsz vele "programozni" mint olyan

böngésző tudja értelmezni

F12 / jobb klikk > Inspect - Elements

<head> -- meta adatok (egy részét nem is látja a felhasználó) - pl. script, SEO kulcsszavak, css styleguide, title (böngésző tab-on fog látszódni!!!)

<p> -- paragraph, sortöréssel jár

margin -- szöveget körbevevő "tér", margó

block elem -- felveszi az egész sornál a rendelkezésre álló helyet, pl. <div> tagnél

inline elem -- csak annyi helyet vesz fel, ameddig a szöveg tart  pl. <strong>, <span>, <a> tageknél

<a href="hovamutatalink.com">review</a>

<div>

semantic tags -- pl. <header>, <article>, <nav>, <main> - nem a megjelenítődés miatt fontos, hanem magunknak egy segítség megértésben

<img src="" alt="">  (src, alt: attribútumok)



////////////////////////////////////////      CSS      ////////////////////////////////////////


<p style="color: red">  (csak demonstráció végett)

<style>
    ide is lehetne írni ... de nem csinálunk ilyet:)
</style>


GOOD PRACTICE: külön CSS fájlba mentjük el a styleguide-ot


// h1: selector, color: property, blue: value (declaration)

h1 {
    color: blue;
    (vagy: color: rgb(100, 144, 0);)
}


// html fájlban CSS meghívása:

<head>
    link rel="stylesheet" href="style.css">
</head>


// fentről lefele halad, ha felülírjuk, az alsó fog számítani (pl. stílus)


// margin - border - padding - content

p {
    margin-top: 0px;
    margin-bottom: 0px;
    display: inline;      // block helyett inline kiemelés
}


h1 {
    width: 30%
    display: inline-block;
}


// képméret megváltoztatása

img {
    width: 300px;
    height: 150px;
}


// webfonts

p {
    font-family: Arial;
}

// le tudunk tölteni betűkészletet, v használhatjuk a Google Fonts-okat   +Select this style

p {
    font-family: 'Ephesis', Arial;  // ha nincs neked Ephesis betűtípusod, akkor használd az Arial-t
}


body {
    background-color: white;
}

*/