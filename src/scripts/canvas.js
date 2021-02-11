
class Canvas {
    constructor(props) {
        this.canvasContainer = document.getElementById("canvas-container");
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth * .5;
        this.canvas.height = window.innerHeight * .68;
        this.ctx = this.canvas.getContext("2d");
        this.canvasContainer.appendChild(this.canvas);
    }

    // createCanvas() {
    //     this.canvasContainer.appendChild(this.canvas);
    // }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }

}
export default Canvas;
