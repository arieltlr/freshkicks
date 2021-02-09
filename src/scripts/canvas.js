// class canvas {
//     constructor(props) {
//         this.canvasContainer = document.getElementById("#canvas-container")
//         this.canvas = document.createElement("canvas");
//         this.canvas.width = this.canvasContainer.width * 0.90;
//         this.canvas.height = this.canvasContainer.height * 0.8;
//         this.ctx = this.canvas.getContext("2d");
//     }

//     createCanvas() {
//         document.getElementById("#canvas-container").append(this.cavas);
//     }
// }

let canvas = document.getElementById("canvas-container");
canvas.width = window.innerWidth * .50;
canvas.height = canvas.width / 1.47;
let ctx = canvas.getContext('2d');

ctx.fillStyle = '#A1C0BA';
ctx.fillRect(10, 10, 300, 300)

//LINE

ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 500);
ctx.strokeStyle = "#CF8562";
ctx.stroke();

// arc 
ctx.beginPath();


ctx.arc(300, 330, 30, 0, Math.PI * 2, false);
ctx.stroke();
