import "./styles/index.scss";
import Canvas from "./scripts/canvas";
import Circle from "./scripts/circles";
import Pattern from './scripts/pattern_option1';


document.querySelector("#pattern1").addEventListener("click", drawPattern)
document.querySelector("#pattern2").addEventListener("click", drawPattern)
document.querySelector("#pattern3").addEventListener("click", drawPattern)

function drawPattern(){
    debugger
    clearCanvas();
    const canvas = new Canvas();
    let id;
    if (this.id === "pattern1"){
        id = '../../dist/images/ab_mono_rb.png'
    } else if (this.id === "pattern2"){
        id = '../../dist/images/ab_flowers.png';
    } else {
        id = '../../dist/images/ab_stripe.png';
    }
    const pattern = new Pattern(canvas.ctx, id);
    pattern.placeImage();
    

}


function startCircles(){
    const canvas = new Canvas();
    let circleArray = [];

for (let i = 0; i < 10; i ++) {
    let radius = 40;
    let x = Math.random() * (canvas.canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.canvas.height - radius * 2) + radius;
    let dy = (Math.random() -.5);
    let dx = (Math.random() -.5);
    console.log(x, y)
    const circle1 = new Circle(canvas.ctx, canvas.canvas.width, canvas.canvas.height, x, y, dx, dy, radius);
    circleArray.push(circle1)
}
console.log(circleArray)

function animateCircles(){
    requestAnimationFrame(animateCircles);
    canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);

    for (let i = 0; i < circleArray.length; i ++){
        circleArray[i].update()
    }
}
animateCircles();

}

// startCircles();

function clearCanvas(){
    debugger
    document.querySelector("canvas") ? 
    document.getElementById("canvas-container").removeChild(document.querySelector("canvas"))
    : null;
    
}