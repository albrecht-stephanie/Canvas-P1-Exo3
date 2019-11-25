var c = document.getElementById("car");
var ctx = c.getContext("2d");
//Premier rectangle
ctx.fillStyle = '#00A954';
ctx.fillRect(90, 60, 120, 40);
//Second rectangle
ctx.fillStyle = '#00A954';
ctx.fillRect(50, 100, 200, 50);
//Roue droite
ctx.fillStyle ='#CDCDCD';
ctx.beginPath();
ctx.arc(210, 150, 30, Math.PI*2, false);
ctx.fill();
ctx.stroke();
//Roue gauche
ctx.fillStyle ='#CDCDCD';
ctx.beginPath();
ctx.arc(90, 150, 30, Math.PI*2, false);
ctx.fill();
ctx.stroke();
