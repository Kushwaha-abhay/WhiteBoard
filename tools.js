let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let pencilOptions = document.querySelector("#pencil-options");
let eraserOption = document.querySelector("#eraser-options");
let penColors = document.querySelectorAll(".pencil-colors div");
let pencilSize = document.querySelector("#pencilSize");
let eraserSize = document.querySelector("#eraserSize");

let pencilWidth = 1;
let eraserWidth = 1;


for(let i=0 ; i< penColors.length ; i++){
    
    penColors[i].addEventListener("click" , function(){
        console.log(penColors[i]);
        if(penColors[i].classList.contains("red")){
            ctx.strokeStyle = "red";
            
        }
        else if(penColors[i].classList.contains("yellow")){
            ctx.strokeStyle  = "yellow";
        }
        else if(penColors[i].classList.contains("blue")){
            ctx.strokeStyle = "blue";
        }
        else{
            ctx.strokeStyle = "black";
        }
    });
}

pencilSize.addEventListener("change" , function(e){
    let size = e.target.value;
    pencilWidth = size;
    ctx.lineWidth = pencilWidth;
});

eraserSize.addEventListener("change" , function(e){
   let size = e.target.value;
   eraserWidth = size;
   ctx.lineWidth = eraserWidth;
});


undo.addEventListener("click", function(){
    if(pointsDb.length){
        let latestline = pointsDb.pop();
    redoDB.push(latestline);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawPoint();
    }
    
});

redo.addEventListener("click", function(){

    if(redoDB.length){
        let lastdeleted = redoDB.pop();
        pointsDb.push(lastdeleted);
        for(let j=0;j<lastdeleted.length;j++)
        {
            ctx.strokeStyle = lastdeleted[j].strokeStyle;
            ctx.lineWidth = line[i].lineWidth;
            if(lastdeleted[j].id == "md"){
                ctx.beginPath();
                ctx.moveTo(lastdeleted[j].x,lastdeleted[j].y);
            }
            else{
                ctx.lineTo(lastdeleted[j].x,lastdeleted[j].y);
                ctx.stroke();
            }
        }
    }
 
    
})

pencil.addEventListener("click", function(){



if(!pencil.classList.contains("active-tool")){
    eraser.classList.remove("active-tool");
    pencil.classList.add("active-tool");
    ctx.strokeStyle = "black";
    ctx.lineWidth = pencilWidth;
    if(!eraserOption.classList.contains("hide"))
    eraserOption.classList.add("hide");
}
else{
    if(!pencilOptions.classList.contains("hide"))
    pencilOptions.classList.add("hide");
    else
    pencilOptions.classList.remove("hide");

}
})
eraser.addEventListener("click", function(){


if(!eraser.classList.contains("active-tool")){
    pencil.classList.remove("active-tool");
    eraser.classList.add("active-tool");
    ctx.lineWidth = eraserWidth;
    ctx.strokeStyle = "white";
    if(!pencilOptions.classList.contains("hide"))
    pencilOptions.classList.add("hide");
}
else
{
    if(!eraserOption.classList.contains("hide"))
    eraserOption.classList.add("hide");
    else
    eraserOption.classList.remove("hide");
}
})

function drawPoint(){

    for(let i=0;i<pointsDb.length;i++)
    {
        let line = pointsDb[i];
        for(let j=0;j<line.length;j++)
        {
            ctx.strokeStyle = line[j].strokeStyle;
            ctx.lineWidth = line[j].lineWidth;
            if(line[j].id == "md"){
                ctx.beginPath();
                ctx.moveTo(line[j].x,line[j].y);
            }
            else{
                ctx.lineTo(line[j].x,line[j].y);
                ctx.stroke();
            }
        }
    }
}