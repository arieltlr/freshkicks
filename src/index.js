import "./styles/index.scss";
import Canvas from "./scripts/canvas";
import pattern1 from "../src/images/ab_mono_rb.png";
import Circle from "./scripts/circles";
import Pattern from './scripts/pattern_option1';






function drawPattern(){
    const canvas = new Canvas();
    canvas.createCanvas();
    const source = "../src/images/ab_mono_rb.png"
    // const pattern = new Pattern(canvas.ctx, source);
    

}
drawPattern();


function startCircles(){
    const canvas = new Canvas();
    canvas.createCanvas();
    debugger

    let circleArray = [];

for (let i = 0; i < 10; i ++) {
    let radius = 40;
    let x = Math.random() * (canvas.canvas.width - radius * 2) + radius;
    debugger
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
    canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height)

    for (let i = 0; i < circleArray.length; i ++){
        circleArray[i].update()
    }
}
animateCircles();

}

// startCircles();