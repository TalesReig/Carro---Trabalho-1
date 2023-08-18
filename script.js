"use strict";

var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

var x = 200, y = 100, larg = 50, alt = 30, ang = 0, vel = 2; // Adjusted the initial velocity
var map = {}; 

function desenhar() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (map[38]) { // Up arrow key
        x += Math.cos(ang) * vel;
        y += Math.sin(ang) * vel;
    }
    if (map[40]) { // Down arrow key
        x -= Math.cos(ang) * vel;
        y -= Math.sin(ang) * vel;
    }
    if (map[37]) { // Left arrow key
        ang -= Math.PI / 72;
    }
    if (map[39]) { // Right arrow key
        ang += Math.PI / 72;
    }

    // Draw car
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(ang);
    ctx.fillStyle = "rgb(0, 0, 200)";
    ctx.fillRect(-larg / 2, -alt / 2, larg, alt);
    ctx.fillStyle = "rgb(204, 0, 0)";
    ctx.fillRect(larg / 2, -alt / 2, larg / 10, alt);
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.beginPath();

    //draw the upper light
    ctx.moveTo(larg / 10 + larg / 2, -alt / 4);
    ctx.lineTo(larg * 2, -alt);
    ctx.lineTo(larg * 2, alt);
    ctx.fill();

    //draw the down light    
    ctx.moveTo(larg / 10 + larg / 2, -alt / -4);
    ctx.lineTo(larg * 2, -alt);
    ctx.lineTo(larg * 2, alt);
    ctx.fill();

    //draw the upper back light    
    // Draw the upper back light (isosceles triangle)
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(-larg / 2, -alt / 4); // Top vertex
    ctx.lineTo(-larg / 2 - larg / 4, -alt / 2, -alt / 2); // Bottom left vertex
    ctx.lineTo(-larg / 2 + larg / 4, -alt / 2, -alt / 2); // Bottom right vertex
    ctx.fill();

    // Draw the lower back light (isosceles triangle)
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(-larg / 2, alt / 4); // Top vertex
    ctx.lineTo(-larg / 2 - larg / 4, alt / 2, alt / 2); // Bottom left vertex
    ctx.lineTo(-larg / 2 + larg / 4, alt / 2, alt / 2); // Bottom right vertex
    ctx.fill();


    ctx.restore();

    requestAnimationFrame(desenhar);
}

// Handle keydown and keyup events
document.addEventListener("keydown", function(e) {
    map[e.keyCode] = true;
});

document.addEventListener("keyup", function(e) {
    map[e.keyCode] = false;
});

// Start the animation
requestAnimationFrame(desenhar);