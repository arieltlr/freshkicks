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
document.querySelector("#option3").addEventListener("click", drawShape)



let shape;
let canvas;
let patternId;
let patternArray;
function drawShape() {
    removeCanvas();
    canvas = new Canvas();
    const silouette = new Clothes(canvas.ctx, canvas.canvas.width, canvas.canvas.height);
    if (this.id === "option1"){
        silouette.drawDress()
        shape = "dress"
    } else if (this.id === "option2"){
        silouette.drawJumpsuit();
        shape = "jumpsuit"
    } else{
        silouette.drawOverall();
        shape = "overall"
    }
   
}

function drawPattern(){
    removeCanvas();
    canvas = new Canvas();
    patternId = this.id;
   
    canvas.ctx.save()
    canvas.ctx.fillStyle = 'white';
    canvas.ctx.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

    canvas.ctx.beginPath();
    const silouette = new Clothes(canvas.ctx, canvas.canvas.width, canvas.canvas.height);
    if (shape === "dress"){
        silouette.drawDress()
    } else if (shape === "jumpsuit"){
        silouette.drawJumpsuit();
    } else{
        silouette.drawOverall();
    }
    
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
    patternArray = [];

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
    
};


function removeCanvas(){
    window.cancelAnimationFrame(myReqSR);
    window.cancelAnimationFrame(myReqStripe);
    window.cancelAnimationFrame(myReqRain);
    window.cancelAnimationFrame(myReqDots);
    document.querySelector("#animate").innerText = 'Animate'
    animating = false;
    document.querySelector("canvas") ? 
    document.getElementById("canvas-container").removeChild(document.querySelector("canvas"))
    : null;
    
}
let animating;
document.querySelector("#animate").addEventListener("click", ()=> {
        if (animating){
            window.cancelAnimationFrame(myReqSR);
            window.cancelAnimationFrame(myReqStripe);
            window.cancelAnimationFrame(myReqRain);
            window.cancelAnimationFrame(myReqDots);
            animating = false;
        } else {
            if (patternId === 'pattern2'){
                animating = true;
                window.requestAnimationFrame(animateDots);
                document.querySelector("#animate").innerText = 'Pause'
            } else if (patternId === 'pattern4'){
                animating = true;
                window.requestAnimationFrame(animateStripeRainbows);
                document.querySelector("#animate").innerText = 'Pause'

            } else if (patternId === 'pattern1'){
                animating = true;
                window.requestAnimationFrame(animateRainbows); 
                document.querySelector("#animate").innerText = 'Pause'

            } else {
                animating = true;
                window.requestAnimationFrame(animateStripes);
                document.querySelector("#animate").innerText = 'Pause'
            }
        }
    });

let myReqSR;
    function animateStripeRainbows () {
        canvas.clearCanvas();
        for(let i = 0; i < patternArray.length -1; i++){
            if (i % 2 === 0){
                patternArray[i].updateLeft();
            }else {
                patternArray[i].updateRight();
            }
        }
        patternArray.forEach((pattern)=> {
            if (pattern.y > 1000 || pattern.y < 0){
                pattern.reverseAnimation()
            }
            if (pattern.x > 700 || pattern.x < 200){
                pattern.reverseAnimation();
            }   
        })
        myReqSR = window.requestAnimationFrame(animateStripeRainbows);
    }

    let myReqStripe;  
    function animateStripes() {
        patternArray.forEach((pattern)=> pattern.update());
        
        patternArray.forEach((pattern) => {
            if (pattern.coords[1] > 600 || pattern.coords[1] < 0){
                pattern.reverseAnimation();
            }
        })
        myReqStripe = window.requestAnimationFrame(animateStripes);
    }
    let myReqDots;
    function animateDots () {
        patternArray.forEach((pattern)=> pattern.update());
        myReqDots = window.requestAnimationFrame(animateDots);
    }
    let myReqRain;
    function animateRainbows () {
        canvas.clearCanvas();
        patternArray.forEach((pattern)=> pattern.update());
        
        patternArray.forEach((pattern) => {
            if (pattern.idx >= pattern.coordArray.length -2){
            pattern.reverseIdx();
            }
            if (pattern.idx < 1){
            pattern.reverseIdx();
            }
        });    
        myReqRain = window.requestAnimationFrame(animateRainbows);
    }