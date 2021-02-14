import "./styles/index.scss";
import Canvas from "./scripts/canvas";
import Rainbow from './scripts/rainbow_pattern';
import Clothes from './scripts/clothes';
import Dots from './scripts/dot_pattern';
import Stripe from './scripts/stripes';
import Arch from './scripts/rainbow_draw';



document.querySelector("#pattern1").addEventListener("click", drawPattern)
document.querySelector("#pattern2").addEventListener("click", drawPattern)
document.querySelector("#pattern3").addEventListener("click", drawPattern)
document.querySelector("#pattern4").addEventListener("click", drawPattern)
document.querySelector("#option1").addEventListener("click", drawShape)
document.querySelector("#option2").addEventListener("click", drawShape)
let shape;
function drawShape() {
    removeCanvas();
    const canvas = new Canvas();
    const silouette = new Clothes(canvas.ctx, canvas.canvas.width, canvas.canvas.height);
    this.id === "option1" ? silouette.drawDress() : silouette.drawJumpsuit();
    shape = Boolean(silouette.dress)
    // const rain = new Arch(canvas.ctx, [canvas.canvas.width/2, canvas.canvas.height/2])
    // rain.drawRainbow()
}

function drawPattern(){
    
    removeCanvas();
    const canvas = new Canvas();
   
    canvas.ctx.save()
    canvas.ctx.fillStyle = 'white';
    canvas.ctx.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

    canvas.ctx.beginPath();
    const silouette = new Clothes(canvas.ctx, canvas.canvas.width, canvas.canvas.height);
    shape ? silouette.drawDress() : silouette.drawJumpsuit();
    
    canvas.ctx.clip();

    canvas.ctx.fillStyle = 'white';
    canvas.ctx.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    const width = 62;
    const height = 77;
    let x = 100;
    let y = 0;
    let cols = 12;
    let rows = 7;
    if (this.id === "pattern2" || this.id === "pattern3"){
        cols = 15;
        rows = 10;
    }
    if (this.id ==="pattern4"){
        cols = 8;
        rows = 12;
    }
    let colWidth = canvas.canvas.width / cols;
    let rowHeight = canvas.canvas.height / rows;
    let patternArray = [];

        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++){
                const rowCenter = rowHeight * i + rowHeight/2;
                const colCenter =  colWidth * j + colWidth/2;
                let id;
                let pattern;
                if (this.id === "pattern1"){
                    pattern = new Rainbow (canvas.ctx, [colCenter, rowCenter] , width, height);
                } else if (this.id === "pattern2"){
                    pattern = new Dots(canvas.ctx, [colCenter , rowCenter], width, height);
                } else if (this.id === "pattern3") {
                    pattern = new Stripe (canvas.ctx, [colCenter , rowCenter], width, height);
                } else {
                    pattern = new Arch (canvas.ctx, [colCenter, rowCenter]);
                }
                patternArray.push(pattern)
                if (pattern.img) {
                        pattern.img.onload = () => {
                        canvas.ctx.drawImage(pattern.img, colCenter, rowCenter, width, height);
                    }
                } else{
                    pattern.drawRainbow()
                }
            }
        }
    document.querySelector("#animate").addEventListener("click", ()=> {
        if (this.id === 'pattern2'){
            window.requestAnimationFrame(animateDots);
        } else if (this.id === 'pattern4'){
            window.requestAnimationFrame(animateStripeRainbows);

        } else if (this.id === 'pattern1'){
            window.requestAnimationFrame(animateRainbows); 
        } else {
            window.requestAnimationFrame(animateStripes);
        }
    });
    const animateStripeRainbows= () => {
        canvas.clearCanvas();
        for(let i = 0; i < patternArray.length -1; i++){
            if (i % 2 === 0){
                patternArray[i].updateLeft();
            }else {
                patternArray[i].updateRight();
            }
        }
        window.requestAnimationFrame(animateStripeRainbows);
        patternArray.forEach((pattern)=> {
            if (pattern.y > 1000 || pattern.y < 0){
                pattern.reverseAnimation()
            }
            if (pattern.x > 700 || pattern.x < 200){
                pattern.reverseAnimation();
            }   
        })
        

    }

        
    const animateStripes= () => {
        // canvas.clearCanvas();
        patternArray.forEach((pattern)=> pattern.update());
        window.requestAnimationFrame(animateStripes);
        patternArray.forEach((pattern) => {
            if (pattern.coords[1] > 600 || pattern.coords[1] < 0){
                pattern.reverseAnimation();
            }
        })
        
      
    }
    const animateDots = () => {
        patternArray.forEach((pattern)=> pattern.update());
        window.requestAnimationFrame(animateDots);
    }
    const animateRainbows= () => {
        canvas.clearCanvas();
        patternArray.forEach((pattern)=> pattern.update());
        window.requestAnimationFrame(animateRainbows);
        patternArray.forEach((pattern) => {
            if (pattern.idx >= pattern.coordArray.length -2){
            pattern.reverseIdx();
            }
            if (pattern.idx < 1){
            pattern.reverseIdx();
            }
        });    
    }
};


function removeCanvas(){
    
    document.querySelector("canvas") ? 
    document.getElementById("canvas-container").removeChild(document.querySelector("canvas"))
    : null;
    
}