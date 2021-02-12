
class Clothes {
    constructor(ctx, canvasWidth, canvasHeight){
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    drawDress(){
        const cx = this.canvasWidth/2;
        const cy = this.canvasHeight/2 + 50; 
        this.ctx.save();
        this.ctx.beginPath();
        //left waist edge
        this.ctx.moveTo(cx -90, cy - 50);
        //left armpit
        this.ctx.lineTo(cx- 125, cy - 180);
        //creates armpit curce and goes to sleeve edge
        this.ctx.quadraticCurveTo(cx - 125, cy - 185, cx - 175, cy - 200);
        //Left side - up shoulder and to neckline. Control points creates shoulder
        this.ctx.bezierCurveTo(cx - 160, cy - 260, cx - 140, cy-260, cx -100, cy - 270);
        //Neckline
        this.ctx.bezierCurveTo(cx - 80, cy - 210, cx + 80, cy- 210, cx  + 100, cy - 270);
        //Right side - shoulder to neckline. Control points create shoulder.
        this.ctx.bezierCurveTo(cx + 160, cy - 260, cx + 140, cy-260, cx + 175, cy - 200);
        //Right side armpit and bottom of sleeve
        this.ctx.quadraticCurveTo(cx + 125, cy - 185, cx + 125, cy - 180);
        //right side of body
        this.ctx.lineTo(cx + 90, cy - 50);
        this.ctx.lineTo(cx + 90, cy - 50);
        this.ctx.stroke();
        

    }
        
}
export default Clothes;