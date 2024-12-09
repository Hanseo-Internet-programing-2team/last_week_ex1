<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>양해솔</title>
</head>
<body>
    <canvas id="myCanvas" width="700" height="400" style="border: 2px solid #cef"></canvas>
    <script>
        const myCanvas4 = document.getElementById("myCanvas");
        const myCtx4 = myCanvas4.getContext("2d");

        
        let gradient = myCtx4.createRadialGradient(350, 200, 50, 350, 200, 150);
        gradient.addColorStop(0, "rgba(255, 182, 193, 1)"); // 핑크색
        gradient.addColorStop(0.5, "rgba(255, 105, 180, 0.8)"); // 중간 색상
        gradient.addColorStop(1, "rgba(255, 20, 147, 0.5)"); // 어두운 핑크색

        myCtx4.beginPath();
        myCtx4.arc(350, 200, 150, 0, Math.PI * 2);
        myCtx4.fillStyle = gradient;
        myCtx4.fill();

        
        myCtx4.shadowColor = "rgba(0, 0, 0, 0.5)";
        myCtx4.shadowBlur = 20;
        myCtx4.shadowOffsetX = 10;
        myCtx4.shadowOffsetY = 10;

        myCtx4.beginPath();
        myCtx4.arc(350, 200, 150, 0, Math.PI * 2);
        myCtx4.fillStyle = gradient;
        myCtx4.fill();
    </script>
</body>
</html>