
class Canvas {
    constructor(props) {
        this.canvasContainer = document.getElementById("canvas-container");
        this.canvas = document.createElement("canvas");
        debugger
        this.canvas.width = window.innerWidth * .50;
        debugger
        this.canvas.height = this.canvas.width/ 1.46;
        this.ctx = this.canvas.getContext("2d");
    }

    createCanvas() {
        this.canvasContainer.appendChild(this.canvas);
    }
}
export default Canvas;

// let canvas = document.getElementById("canvas");
// canvas.width = window.innerWidth * .50;
// canvas.height = canvas.width / 1.46;
// let ctx = canvas.getContext('2d');
// const person = document.getElementById("person");
// canvas.drawImage(person, 10, 10);

// ctx.fillStyle = '#A1C0BA';
// ctx.fillRect(10, 10, 300, 300)

// //LINE

// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 500);
// ctx.strokeStyle = "#CF8562";
// ctx.stroke();

// arc 
// ctx.beginPath();
// ctx.arc(300, 330, 30, 0, Math.PI * 2, false);
// ctx.stroke();

// for ( let i = 0; i < 100; i ++ ){
//     let x = Math.random() * canvas.width;
//     let y = Math.random() * canvas.height;
//     ctx.beginPath();
//     ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//     ctx.stroke();
// }






