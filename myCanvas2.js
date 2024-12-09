    const Canvas2 = document.getElementById("my Canvas");
    const Ctx2 = canvas.getContext("2d");

    let gradient = ctx.createRadialGradient(350, 200, 150, 300, 120, 10);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1,"white");
    
    ctx.beginPath();
    ctx.arc(350, 200, 150, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
