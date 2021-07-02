



const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isPenDown = false;
let pointsDb = [];
let redoDB = [];
let line = [];
let {top : topOffset}=canvas.getBoundingClientRect();

canvas.height = window.innerHeight-topOffset;
canvas.width = window.innerWidth;

window.addEventListener("resize", function(e){
    canvas.height = window.innerHeight-topOffset;
    canvas.width = window.innerWidth;
})

canvas.addEventListener("mousedown" ,function(e){
   // socket.emit("mousedown","drawing");
    if(redoDB.length)
    redoDB = [];
    isPenDown = true;
    let x = e.clientX;
    let y = e.clientY-topOffset;

    ctx.beginPath();
    ctx.moveTo(x,y);
    let point = {
        id :"md",
        x : x,
        y : y,
        strokeStyle : ctx.strokeStyle,
        lineWidth : ctx.lineWidth
    }
    socket.emit("mousedown",point);
    line.push(point);
});


canvas.addEventListener("mousemove", function(e){
    if(isPenDown){
    let x = e.clientX;
    let y = e.clientY-topOffset;
    ctx.lineTo(x,y);
    ctx.stroke();
    let point = {
        id :"mm",
        x : x,
        y : y,
        strokeStyle : ctx.strokeStyle,
        lineWidth : ctx.lineWidth
    }
    socket.emit("mousemove",point);
    line.push(point);
    }
});

canvas.addEventListener("mouseup", function(e){
isPenDown = false;
pointsDb.push(line);
line = [];
});
