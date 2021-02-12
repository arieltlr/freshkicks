
class Circle {
    constructor(ctx, width, height, x, y, dx, dy, radius){
        this.width = width;
        this.height = height; 
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

    }
    

    drawCircle(){
        
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.stroke();
    }
    
    
    update() {
        if (this.x + this.radius > this.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > this.height || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy
        this.drawCircle();
    }

}
// function startCircles(){
//     const canvas = new Canvas();
//     let circleArray = [];

// for (let i = 0; i < 10; i ++) {
//     let radius = 40;
//     let x = Math.random() * (canvas.canvas.width - radius * 2) + radius;
//     let y = Math.random() * (canvas.canvas.height - radius * 2) + radius;
//     let dy = (Math.random() -.5);
//     let dx = (Math.random() -.5);
//     console.log(x, y)
//     const circle1 = new Circle(canvas.ctx, canvas.canvas.width, canvas.canvas.height, x, y, dx, dy, radius);
//     circleArray.push(circle1)
// }
// console.log(circleArray)

// function animateCircles(){
//     requestAnimationFrame(animateCircles);
//     canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);

//     for (let i = 0; i < circleArray.length; i ++){
//         circleArray[i].update()
//     }
// }
// animateCircles();

// }

// // startCircles();

export default Circle;