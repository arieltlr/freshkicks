
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
        this.ctx.strokeStyle = '#6F8E88';
        this.ctx.lineWidth = 7;
        //left waist edge
        this.ctx.moveTo(cx - 60, cy - 50);
        //left armpit
        this.ctx.lineTo(cx - 95, cy - 160);
        //creates armpit curve and goes to sleeve edge
        this.ctx.quadraticCurveTo(cx - 95, cy - 165, cx - 145, cy - 180);
        //Left side - up shoulder and to neckline. Control points creates shoulder
        this.ctx.bezierCurveTo(cx - 130, cy - 240, cx - 110, cy - 240, cx - 65, cy - 250);
        //Neckline
        this.ctx.bezierCurveTo(cx - 50, cy - 190, cx + 50, cy- 190, cx  + 65, cy - 250);
        //Right side - shoulder to neckline. Control points create shoulder.
        this.ctx.bezierCurveTo(cx + 130, cy - 240, cx + 110, cy - 240, cx + 145, cy - 180);
        //Right side armpit and bottom of sleeve
        this.ctx.quadraticCurveTo(cx + 95, cy - 165, cx + 95, cy - 160);
        //right side of body
        this.ctx.lineTo(cx + 60, cy - 50);
        //add stroke here to close off shirt.
        //down right side skirt
        this.ctx.quadraticCurveTo(cx + 150, cy + 75, cx + 160, cy + 200);
        //across hemline
        this.ctx.quadraticCurveTo(cx, cy + 250, cx -160, cy + 200);
        //up left side skirt
        this.ctx.quadraticCurveTo(cx - 150, cy + 75, cx -60 , cy -50);
        this.ctx.stroke();
        

    }
    drawPants(){
        const cx = this.canvasWidth/2;
        const cy = this.canvasHeight/2 + 50; 
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#6F8E88';
        this.ctx.lineWidth = 7;
    }
        
}
export default Clothes;