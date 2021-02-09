import stripe from '../images/ab_stripe.png';

class Pattern {
    constructor(ctx, src){
        this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        // this.img = img;
        this.src = src;
    }

    initialize(){
        const img = new Image ();
        this.img.src = this.src;
        this.img.onload = function(){
            this.ctx.drawImage(img, 0, 0);
        }
        
    }
}

export default Pattern;
