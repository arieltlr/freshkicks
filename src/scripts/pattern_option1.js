import rainbow from '../../dist/images/ab_mono_rb.png';
import Circle from './circles';

class Pattern {
    constructor(ctx, src, coords, width, height) {
        this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        // this.img = img;
        this.src = src;
        this.coords = coords;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = this.src;
        this.animationDir = 1;
        this.angle = 90;
  
    }

    drawImage(){
        this.ctx.drawImage(this.img, this.coords[0], this.coords[1], this.width, this.height);
    }

    update() {
        this.angle += 10 * this.animationDir;

        // this.ctx.beginPath();
        // // x coordinate, y coordinate, radius, startAngle, endAngle, direction(false, is clockwise)
        // const path = this.ctx.arc(this.coords[0] + this.width, this.coords[1], this.width, Math.PI, 0, false)
        // this.ctx.stroke();
        // this.ctx.closePath();
        let x = this.coords[0] + (15 * Math.cos(this.angle * (Math.PI/ 180)) * this.animationDir);
        let y = this.coords[1] + (15 * Math.sin(this.angle * (Math.PI/180)) * this.animationDir);
        this.coords = [x, y];
        this.drawImage();
    }
    reverseAnimation() {
        this.animationDir *= -1;
  }
    
}

export default Pattern;
