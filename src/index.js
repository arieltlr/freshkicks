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
    canvas.ctx.save()
    canvas.ctx.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    canvas.ctx.translate(canvas.canvas.width / 2, canvas.canvas.height / 2);

    canvas.ctx.beginPath();
    canvas.ctx.arc(o, 0, 60, 0, Math.PI *2, true);
    canvas.ctx.clip();

    canvas.ctx.fillStyle = '#fff';
    canvas.ctx.fillRect(-this.canvasWidth / 2, -this.canvasHeight / 2, this.canvas.width, this.canvas.height);
    canvas.ctx.restore()

    const width = 62;
    const height = 77;
    let x = 100;
    let y = 0;
    let rows = 5;
    let cols = 5;
    let colWidth = canvas.canvas.width / cols;
    console.log(colWidth)
    let rowHeight = canvas.canvas.height / rows;
    let patternArray = [];
    
        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++){
                const rowCenter = rowHeight * i + rowHeight/2 - height;
                const colCenter =  colWidth * j + colWidth/2 - width;
                const pattern = new Pattern(canvas.ctx, id, [colCenter , rowCenter], width, height);
                patternArray.push(pattern)
                pattern.img.onload = () => {
                    canvas.ctx.drawImage(pattern.img, colCenter, rowCenter, width, height);
                }
            }
        }
    let paused = false;
    document.querySelector(".option1").addEventListener("click", ()=> {
        paused = true;
    })
    document.querySelector("#animate").addEventListener("click", ()=> {
        paused = false;
    })
   const animatePattern= () => {
        canvas.clearCanvas();
        if (!paused) patternArray.forEach((pattern)=> pattern.update());
        window.requestAnimationFrame(animatePattern);
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
    // window.requestAnimationFrame(animatePattern);
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