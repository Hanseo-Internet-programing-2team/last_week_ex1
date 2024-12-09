const myCanvas1 = document.querySelector("#myCanvas1");
const myCtx1 = myCanvas1.getContext("2d");

let myGradient1 = myCtx1.createRadialGradient(350,200,150,300,120,10);
myGradient1.addColorStop(0,"blue");
myGradient1.addColorStop(1, "white");

myCtx1.beginPath();
myCtx1.arc(350,200,150,0,Math.PI*2)
myCtx1.fillStyle = myGradient1;
myCtx1.fill();
