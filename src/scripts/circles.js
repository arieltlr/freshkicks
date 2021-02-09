
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

export default Circle;