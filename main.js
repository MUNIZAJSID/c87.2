canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/// Criação do retângulo cinza
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

// Criação do círculo azul
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// Criação do círculo preto com posição 350 e 210
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// Criação do círculo vermelho com posição 210 e 40
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// Criação do círculo laranja com posição  300 e 250
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

// Criação do círculo verde com posição 400 e 250
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();