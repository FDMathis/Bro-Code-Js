// Canvas API = a means for drawing graphics used for 
//              animations, games, and data visualization

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

//set width
context.lineWidth = 10;
context.strokeStyle = "blue";

// You actually draw on the context, so start code with context
//beginPath method is like putting brush on the canvas
context.beginPath();

//Starting point - The top left of the canvas is (0, 0)
context.moveTo(0, 0);

//Destination 
context.lineTo(250, 250);

//Make the brush stroke
context.stroke();

context.lineTo(250, 500);
context.stroke();
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();

//Draw Triangle
context.strokeStyle = "green";
context.fillStyle = "yellow";
context.lineWidth = 5;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
// You can either stroke or fill or both with the shape
context.stroke();
context.fill();

//Draw Rectangle
context.strokeStyle = "red";
context.fillStyle = "purple";
context.lineWidth = 7;
context.strokeRect(350, 125, 100, 100);
context.fillRect(350, 125, 100, 100);

//Draw Circle
// (x, y, r, sAngle, eAngle, counterclockwise)
context.strokeStyle = "orange";
context.fillStyle = "lightblue";
context.beginPath();
context.arc(125, 350, 100, 0, 2 * Math.PI, true);
context.stroke();
context.fill();

//Draw Text
context.font = "50px MV Boli";
context.fillStyle = "black";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);
