import "./styles/index.scss";
import Canvas from "./scripts/canvas";
import Circle from "./scripts/circles";
import Pattern from './scripts/pattern_option1';


document.querySelector("#pattern1").addEventListener("click", drawPattern)
document.querySelector("#pattern2").addEventListener("click", drawPattern)
document.querySelector("#pattern3").addEventListener("click", drawPattern)

function drawPattern(){
    
    removeCanvas();
    const canvas = new Canvas();
    let id;
    if (this.id === "pattern1"){
        id = '../../dist/images/ab_mono_rb.png'
    } else if (this.id === "pattern2"){
        id = '../../dist/images/ab_flowers.png';
    } else {
        id = '../../dist/images/ab_stripe.png';
    }
    const width = 62;
    const height = 77;
    let x = canvas.canvas.width/2 - width/2;
    let y = canvas.canvas.height/2 - height/2;
    
    const pattern = new Pattern(canvas.ctx, id, [x, y], width, height);
    pattern.img.onload = () => {
            canvas.ctx.drawImage(pattern.img, x, y, width, height);
        }
 
   const animatePattern= () => {
        canvas.clearCanvas();
        pattern.update();
        console.log(pattern.coords)
        window.requestAnimationFrame(animatePattern);
        if (pattern.angle > 90 || pattern.angle < -90){
            pattern.reverseAnimation();
        }
        if (pattern.coords[0] > canvas.canvas.width){
            pattern.coords = [canvas.canvas.width/2 - width/2, canvas.canvas.height/2 - height/2]
        }
        if (pattern.coords[1] > canvas.canvas.height){
            pattern.coords = [canvas.canvas.width/2 - width/2, canvas.canvas.height/2 - height/2]
        }
      
    }
    window.requestAnimationFrame(animatePattern);

};



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

function removeCanvas(){
    
    document.querySelector("canvas") ? 
    document.getElementById("canvas-container").removeChild(document.querySelector("canvas"))
    : null;
    
}