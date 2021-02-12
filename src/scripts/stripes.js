class Stripe {
    constructor(ctx, src, coords, width, height) {
        this.ctx = ctx;
        this.src = src;
        this.coords = coords;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = this.src;
        this.animationDir = 1;
        this.animationIdx = 1;
        // this.angle = 0;
        // this.idx = 0;
 
  
    }

    drawImage(){
        this.ctx.drawImage(this.img, this.coords[0], this.coords[1], this.width, this.height);
    }

    update() {
        let x = this.coords[0];
        let y = this.coords[1] + 1 * this.animationDir;
        this.coords = [x, y];       
        this.drawImage();
    }
    reverseIdx(){
        this.animationIdx *= -1;
    }
    reverseAnimation() {
        this.animationDir *= -1;
  }
    
}

export default Stripe;