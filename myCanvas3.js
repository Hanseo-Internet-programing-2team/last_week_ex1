const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let gradient = ctx.createRadialGradient(350, 200, 50, 350, 200, 150);
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "lightgreen");

ctx.beginPath();
ctx.arc(350, 200, 150, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();