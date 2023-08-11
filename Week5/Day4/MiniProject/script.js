const field = document.querySelector("main#field");
let currentColor = "black";
let isMouseDown = false;

fillField();

const colors = document.querySelectorAll("aside>div");
const cells = field.querySelectorAll("div");

addEmentListeners();
addEventListenersToCells();

function addEmentListeners() {
    for (let color of colors) {
        color.addEventListener("click", getColor);
    }
}

function addEventListenersToCells() {
    for (let cell of cells) {
        cell.addEventListener("mousedown", setColor);
        cell.addEventListener("mouseover", setColorOver);
        cell.addEventListener("mouseup", stopColor)
    }
}

function getColor(e) {
    currentColor = e.target.style.backgroundColor;
    console.log(currentColor);
}

function setColor(e) {
    isMouseDown = true;
    e.target.style.backgroundColor = currentColor;
}

function setColorOver(e) {
    if (isMouseDown) {
        e.target.style.backgroundColor = currentColor;
    }
}

function stopColor(e) {
    isMouseDown = false;
    console.log(isMouseDown);
}



function fillField() {
    for (let i = 0; i < 5000; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "white";

        field.appendChild(div);
    }
}


function clearField() {
    for (let cell of cells) {
        cell.style.backgroundColor = "white";
    }
}

