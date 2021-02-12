import dots_img from '../images/ab_flowers.png';

class Dots {
    constructor(ctx, coords, width, height) {
        this.ctx = ctx;
        this.coords = coords;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = this.buildAssetPath(dots_img)
        this.animationDir = 1;
        this.animationIdx = 1;
        this.angle = 0;
        this.idx = 0;
 
  
    }

    drawImage(){
        this.ctx.drawImage(this.img, this.coords[0], this.coords[1], this.width, this.height);
    }

    update() {
        this.angle += 10;
        let x = this.coords[0] + (1 * Math.round(Math.cos(this.angle * (Math.PI/ 180))) * this.animationDir);
        let y = this.coords[1] + (1 * Math.round(Math.sin(this.angle * (Math.PI/180))) * this.animationDir);
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

export default Dots;
