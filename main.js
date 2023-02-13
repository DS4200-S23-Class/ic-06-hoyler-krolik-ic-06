let button = document.getElementById("button");

button.addEventListener("click", lineColor);

function lineColor(){
    let line = document.getElementById("line");

    line.classList.toggle("green");

}

