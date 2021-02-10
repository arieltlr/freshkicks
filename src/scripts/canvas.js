
class Canvas {
    constructor(props) {
        this.canvasContainer = document.getElementById("canvas-container");
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth * .50;
        this.canvas.height = this.canvas.width/ 1.46;
        this.ctx = this.canvas.getContext("2d");
        this.canvasContainer.appendChild(this.canvas);
    }

    // createCanvas() {
    //     this.canvasContainer.appendChild(this.canvas);
    // }

    clearCanvas(){
        debugger
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }

}
export default Canvas;
