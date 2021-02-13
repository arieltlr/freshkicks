class Arch {
    constructor(ctx, coords){
        this.ctx = ctx;
        this.coords = coords;
        this.x = coords[0];
        this.y = coords[1];
        this.move = 1;
        this.animationDir = 1;

        
    }

    drawRainbow(){
        const cx = this.x;
        const cy = this.y;
        //inner arch 
        this.ctx.beginPath();
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = '#A1C0BA';
        this.ctx.lineWidth = 8;
        this.ctx.moveTo(cx -20, cy - 10);
        this.ctx.quadraticCurveTo(cx, cy -50, cx + 20, cy -10);
        this.ctx.stroke();
        
        //middle arch
        this.ctx.beginPath();
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = '#CF8562';
        this.ctx.lineWidth = 8;
        this.ctx.moveTo(cx -30, cy - 10);
        this.ctx.quadraticCurveTo(cx, cy -70, cx + 30, cy -10);
         this.ctx.stroke()
        
        //outer arch
        this.ctx.beginPath();
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = '#EAC6B8';
        this.ctx.lineWidth = 8;
        this.ctx.moveTo(cx -40, cy - 10);
        this.ctx.quadraticCurveTo(cx, cy -90, cx + 40, cy -10);
        this.ctx.stroke();

    }
    updateLeft(){
        this.x += -1 *this.animationDir;
        this.y += -1 *this.animationDir;
        this.drawRainbow()
    }
    updateRight(){
        this.x += 1 *this.animationDir;
        this.y += 1 *this.animationDir;
        this.drawRainbow()
    }
    reverseAnimation(){
        this.animationDir *= -1
    }
}
export default Arch;