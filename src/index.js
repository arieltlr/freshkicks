import "./styles/index.scss";
import Canvas from "./scripts/canvas";
import Circle from "./scripts/circles";
import Rainbow from './scripts/rainbow_pattern';
import Clothes from './scripts/clothes';
import Dots from './scripts/dot_pattern';
import Stripe from './scripts/stripes'


document.querySelector("#pattern1").addEventListener("click", drawPattern)
document.querySelector("#pattern2").addEventListener("click", drawPattern)
document.querySelector("#pattern3").addEventListener("click", drawPattern)
document.querySelector(".option1").addEventListener("click", drawShape)

function drawShape() {
    removeCanvas();
    const canvas = new Canvas();
    const dress = new Clothes(canvas.ctx, canvas.canvas.width, canvas.canvas.height)
    dress.drawDress();
}

function drawPattern(){
    
    removeCanvas();
    const canvas = new Canvas();
   
    canvas.ctx.save()
    canvas.ctx.fillStyle = 'white';
    canvas.ctx.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

    canvas.ctx.beginPath();
    const dress = new Clothes(canvas.ctx, canvas.canvas.width, canvas.canvas.height);
    dress.drawDress()
    // canvas.ctx.arc(canvas.canvas.width / 2, canvas.canvas.height / 2, 300, 0, Math.PI *2, true);
    canvas.ctx.clip();

    canvas.ctx.fillStyle = 'white';
    canvas.ctx.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    const width = 62;
    const height = 77;
    let x = 100;
    let y = 0;
    let cols = 12;
    let rows = 7;
    if (this.id === "pattern2"){
        cols = 15;
        rows = 10;
    }
    if (this.id ==="pattern3"){
        cols = 15;
        rows = 10;
    }
    let colWidth = canvas.canvas.width / cols;
    let rowHeight = canvas.canvas.height / rows;
    let patternArray = [];

        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++){
                const rowCenter = rowHeight * i + rowHeight/2 - height;
                const colCenter =  colWidth * j + colWidth/2 - width;
                let id;
                let pattern;
                if (this.id === "pattern1"){
                    id = '../../dist/images/ab_mono_rb.png'
                    pattern = new Rainbow(canvas.ctx, id, [colCenter , rowCenter], width, height);
                } else if (this.id === "pattern2"){
                    id = '../../dist/images/ab_flowers.png';
                    pattern = new Dots(canvas.ctx, id, [colCenter , rowCenter], width, height);
                } else {
                    id = '../../dist/images/ab_stripe.png';
                    pattern = new Stripe (canvas.ctx, id, [colCenter , rowCenter], width, height);
                }
                patternArray.push(pattern)
                pattern.img.onload = () => {
                    canvas.ctx.drawImage(pattern.img, colCenter, rowCenter, width, height);
                }
            }
        }
    
    let paused = true;
    document.querySelector("#shape2").addEventListener("click", ()=> {
        paused = true;
    })
    document.querySelector("#animate").addEventListener("click", ()=> {
        if (this.id === 'pattern2'){
            window.requestAnimationFrame(animateDots);
        } else if (this.id === 'pattern1'){
            window.requestAnimationFrame(animateRainbows);
        } else {
            window.requestAnimationFrame(animateStripes);
        }
    })
    const animateStripes= () => {
        // canvas.clearCanvas();
        patternArray.forEach((pattern)=> pattern.update());
        window.requestAnimationFrame(animateStripes);
        patternArray.forEach((pattern) => {
            if (pattern.coords[1] > 600 || pattern.coords[1] < 0){
                pattern.reverseAnimation()
            }
        })
        
      
    }
    const animateDots= () => {
        patternArray.forEach((pattern)=> pattern.update());
        window.requestAnimationFrame(animateDots);
        
      
    }
    const animateRainbows= () => {
        canvas.clearCanvas();
        patternArray.forEach((pattern)=> pattern.update());
        window.requestAnimationFrame(animateRainbows);
        patternArray.forEach((pattern) => {
            if (pattern.idx >= pattern.coordArray.length -2){
            // console.log(pattern.coordArray.length())
            pattern.reverseIdx();
            }
            if (pattern.idx < 1){
            pattern.reverseIdx();
            }
        });    
    }
    // if(!paused) window.requestAnimationFrame(animatePattern);
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