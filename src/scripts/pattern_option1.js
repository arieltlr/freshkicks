import rainbow from '../../dist/images/ab_mono_rb.png';

class Pattern {
    constructor(ctx, src, coords) {
        debugger
        this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        // this.img = img;
        this.src = src;
        this.coords = coords;
  
    }

    placeImage(){
        const img = new Image ();
        
        debugger
        img.onload = () => {
            debugger
            this.ctx.drawImage(img, this.coords[0], this.coords[1]);
        }
        img.src = this.src;
    }

    update() {
        debugger
        this.coords = this.coords.map((coord) => (coord += 1))
        debugger
        this.placeImage();

    }
}

export default Pattern;
