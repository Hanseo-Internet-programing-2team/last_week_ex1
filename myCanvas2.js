    const Canvas2 = document.getElementById("myCanvas2");
    const Ctx2 = Canvas2.getContext("2d");

    let gradient = Ctx2.createRadialGradient(350, 200, 150, 300, 120, 10);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1,"white");
    
    Ctx2.beginPath();
    Ctx2.arc(350, 200, 150, 0, Math.PI * 2);
    Ctx2.fillStyle = gradient;
    Ctx2.fill();
