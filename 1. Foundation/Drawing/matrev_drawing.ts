//rectangle


ctx.fillRect(100, 60, 50, 50);
ctx.fillRect(200, 100, 40, 180);
ctx.strokeRect(20, 20, 300, 500);

let width: number = 10;
let height: number = 10;
let x: number = 0;
let y: number = 0;

for (let i = 0; i < 5; i++) {
    ctx.strokeRect(xPos, yPos, width, height);
    xPos += 10;
    width += 20;
    height += 30;
}

//ez fölé kerüljön a fillRect-nek stb.
ctx.fillstyle = 'red';
ctx.strokeStyle = 'blue';

------

    //beginPath = ábrát akarok rajzolni kb

    ctx.beginPath();
ctx.moveTo(400, 20);
ctx.lineTo(450, 100);
ctx.lineTo(550, 150);
ctx.stroke();   //ekkor húzza be a vonalat

ctx.moveTo(300, 200);
ctx.lineTo(330, 250);
ctx.stroke();

//beginPath kell mindig az újak elé a színek miatt!

ctx.moveTo(400, 200);
ctx.lineTo(330, 250);
ctx.lineTo(500, 300);
ctx.lineTo(400, 200);
ctx.fill();  //akkor is kitölti, ha nem adjuk meg a 3. oldalt

//kör
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.arc(100, 200, 20, 0, Math.PI * 2);
//ctrx.arc(100, 200, 50, 0, Match.Pi / 2); // negyedkör
ctx.stroke();

function drawTriangle(xPos: number, yPos: number, size: number) {
    const colors: string[] = ['red', 'blue', 'yellow'];
    ctx.fillstyle = colors[Math.floor(Math.random() * 3)];
    ctx.beginPath();
    ctx.moveTo(xPos, yPos);
    ctx.lineTo(xPos + size, yPos);
    ctx.lineTo(xPos + size, yPos + size * 2);
    ctx.fill();
}
drawTriangle(100, 100, 50);


const triangle: any = {
    x: 100,
    y: 200,
    size: 20
}

