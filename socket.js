socket.on("md",function(point){
    let myStrokeStyle = ctx.strokeStyle;
    let mylinewidth = ctx.lineWidth;
    ctx.strokeStyle = point.strokeStyle;
    ctx.lineWidth = point.lineWidth;
    ctx.beginPath();
    ctx.moveTo(point.x,point.y);

    ctx.strokeStyle = myStrokeStyle;
    ctx.lineWidth = mylinewidth;
})

socket.on("mm",function(point){
    let myStrokeStyle = ctx.strokeStyle;
    let mylinewidth = ctx.lineWidth;
    ctx.strokeStyle = point.strokeStyle;
    ctx.lineWidth = point.lineWidth;
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    ctx.strokeStyle = myStrokeStyle;
    ctx.lineWidth = mylinewidth;
})