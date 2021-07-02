let toolButton = document.querySelector(".tool-button");
let toolbox = document.querySelector(".toolbox");
toolButton.addEventListener("click", function(){

    if(!toolbox.classList.contains("hide"))
    toolbox.classList.add("hide");
    else
    toolbox.classList.remove("hide");
})