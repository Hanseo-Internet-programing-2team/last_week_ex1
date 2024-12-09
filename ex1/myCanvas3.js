const myCanvas3 = document.getElementById("myCanvas3");
const myCtx3 = myCanvas3.getContext("2d");

let gradient3 = myCtx3.createRadialGradient(350, 200, 50, 350, 200, 150);
gradient3.addColorStop(0, "green");
gradient3.addColorStop(1, "lightgreen");

myCtx3.beginPath();
myCtx3.arc(350, 200, 150, 0, Math.PI * 2);
myCtx3.fillStyle = gradient3;
myCtx3.fill();