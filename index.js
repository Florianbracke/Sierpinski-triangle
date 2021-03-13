let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const drawTriangle = () => {
  
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(550, 300);
    ctx.lineTo(150,550)
    ctx.lineTo(150,50);
    ctx.stroke();
} 
drawTriangle();


// map triangle

setInterval(function(){
    const one = (150,50);
console.log(one)
    const corners= [one]
    ctx.beginPath();
    ctx.moveTo(250,150);
    ctx.lineTo(150,50)
   
    ctx.stroke();
}, 500);

