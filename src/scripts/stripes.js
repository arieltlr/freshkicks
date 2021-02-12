import stripe_img from '../images/ab_stripe.png';

class Stripe {
    constructor(ctx, coords, width, height) {
        this.ctx = ctx;
        this.coords = coords;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = this.buildAssetPath(stripe_img)
        this.animationDir = 1;
        this.animationIdx = 1;
 
  
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
    buildAssetPath(imgSrc) {
        return `./dist/${imgSrc}`;
    }
}

export default Stripe;