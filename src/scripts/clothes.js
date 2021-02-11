import Pattern from './scripts/pattern_option1';

class Clothes {
    constructor(ctx, canvasWidth, canvasHeight){
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    draw(){
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.translate(this.canvasWidth / 2, this.canvasHeight / 2);

        this.ctx.beginPath();
        this.ctx.arc(o, 0, 60, 0, Math.PI *2, true);
        this.ctx.clip();

        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(-this.canvasWidth / 2, -this.canvasHeight / 2, this.canvas.width, this.canvas.height);

        const width = 62;
        const height = 77;
        let x = 100;
        let y = 0;
        let rows = 5;
        let cols = 5;
        let colWidth = canvas.canvas.width / cols;
        let rowHeight = canvas.canvas.height / rows;
        let patternArray = [];
        
            for (let i = 0; i < rows; i++){
                for (let j = 0; j < cols; j++){
                    const rowCenter = rowHeight * i + rowHeight/2 - height;
                    const colCenter =  colWidth * j + colWidth/2 - width;
                    const pattern = new Pattern(canvas.ctx, id, [colCenter , rowCenter], width, height);
                    patternArray.push(pattern)
                    
                    pattern.img.onload = () => {
                        canvas.ctx.drawImage(pattern.img, colCenter, rowCenter, width, height);
                    }
            
                }
            }
    
        }

 }

 export default Clothes;