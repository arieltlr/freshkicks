import rainbow_img from '../images/ab_mono_rb.png'; 

class Rainbow {
    constructor(ctx, coords, width, height) {
        this.ctx = ctx;
        this.coords = coords;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = this.buildAssetPath(rainbow_img)
        this.animationDir = 1;
        this.animationIdx = 1;
        this.angle = 0;
        this.idx = 0;
        this.coordArray = [];
        this.createArray();
  
    }

    drawImage(){
        this.ctx.drawImage(this.img, this.coords[0], this.coords[1], this.width, this.height);
    }
    createArray(){
        for(let i = 0; i < 32; i++){
        if (this.angle > 90 || this.angle < -90){
            this.animationDir *= -1;
        }
        this.angle += 10 * this.animationDir;
        let x = this.coords[0] + (5 * Math.round(Math.cos(this.angle * (Math.PI/ 180))) * this.animationDir);
        let y = this.coords[1] + (5 * Math.round(Math.sin(this.angle * (Math.PI/180))) * this.animationDir);
        this.coords = [x,y];
        this.coordArray.push([x, y])
        }
        this.coordArray = this.coordArray.slice(10);
    }

    update() {
       
        // this.ctx.beginPath();
        // // x coordinate, y coordinate, radius, startAngle, endAngle, direction(false, is clockwise)
        // const path = this.ctx.arc(this.coords[0] + this.width, this.coords[1], this.width, Math.PI, 0, false)
        // this.ctx.stroke();
        // this.ctx.closePath();
        this.idx += 1 * this.animationIdx;
        let x = this.coordArray[this.idx][0];
        let y = this.coordArray[this.idx][1];
        this.coords = [x, y];
        this.drawImage();
    }
    reverseIdx(){
        this.animationIdx *= -1;
    }
    reverseAnimation() {
        this.animationDir *= -1;
    }
    buildAssetPath(imgSrc) {
        return `./dist/${imgSrc}`;
    }
    
}

export default Rainbow;
