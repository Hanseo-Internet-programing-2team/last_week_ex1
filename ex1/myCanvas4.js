const myCanvas4 = document.getElementById("myCanvas4");
const myCtx4 = myCanvas4.getContext("2d");


let gradient4 = myCtx4.createRadialGradient(350, 200, 50, 350, 200, 150);
gradient4.addColorStop(0, "rgba(255, 182, 193, 1)"); // 핑크색
gradient4.addColorStop(0.5, "rgba(255, 105, 180, 0.8)"); // 중간 색상
gradient4.addColorStop(1, "rgba(255, 20, 147, 0.5)"); // 어두운 핑크색

myCtx4.beginPath();
myCtx4.arc(350, 200, 150, 0, Math.PI * 2);
myCtx4.fillStyle = gradient4;
myCtx4.fill();


myCtx4.shadowColor = "rgba(0, 0, 0, 0.5)";
myCtx4.shadowBlur = 20;
myCtx4.shadowOffsetX = 10;
myCtx4.shadowOffsetY = 10;

myCtx4.beginPath();
myCtx4.arc(350, 200, 150, 0, Math.PI * 2);
myCtx4.fillStyle = gradient4;
myCtx4.fill();
