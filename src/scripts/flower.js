function drawFlower () {
    removeCanvas();
    const canvas = new Canvas();
    canvas.ctx.beginPath();
    const dress = new Clothes(canvas.ctx, canvas.canvas.width, canvas.canvas.height);
    dress.drawDress()
    canvas.ctx.clip();

    canvas.ctx.fillStyle = 'white';
    canvas.ctx.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    let flowerArray = [];
    for(let i = 0; i < 400; i++ ){
        let coord1 = Math.random() * 1000;
        let coord2 = Math.random() * 1000;
        const flower = makeFlower(coord1, coord2);

        function makeFlower(coord1, coord2){
            canvas.ctx.save
            canvas.ctx.translate(coord1, coord2)
            canvas.ctx.beginPath();
            canvas.ctx.fillStyle = '#F2DED7';
            // canvas.ctx.moveTo(100, 0);
            console.log("in make flower")
            console.log(coord1, coord2)
            for(let i = 0; i < 2* Math.PI; i += 0.01){
                let x = 40 * Math.cos(6 * i) * Math.cos(i);
                let y = 40 * Math.cos(6 * i) * Math.sin(i);
                canvas.ctx.lineTo(x, y)
            }

            canvas.ctx.fill();
            canvas.ctx.restore()
        }
        flowerArray.push(flower);
    }
    function animateFlower(){
        canvas.ctx.clearRect(-canvas.canvas.width/2, -canvas.canvas.height/2, canvas.canvas.width, canvas.canvas.height);
        flowerArray.forEach((flower)=> canvas.ctx.rotate(.005))
        window.requestAnimationFrame(animateFlower);

    }
    window.requestAnimationFrame(animateFlower);

}