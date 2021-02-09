import rainbow from '../../dist/images/ab_mono_rb.png';

class Pattern {
    constructor(ctx, src){
        this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        // this.img = img;
        this.src = src;
    }

    placeImage(){
        const img = new Image ();
        img.src = this.src;
        debugger
        img.onload = () => {
            debugger
            this.ctx.drawImage(img, 0, 0);
        }
    }
}

export default Pattern;
