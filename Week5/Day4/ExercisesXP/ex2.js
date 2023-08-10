// In your Javascript file, use setInterval to move the < div id = "animate" > to the right side of the < div id = "container" >, when the button is clicked on.
//     The < div id = "animate" > should move 1px to the right every milisecond, until it reaches the end of the < div id = "container" >.
const animateDiv = document.querySelector("div#animate");
const containerDiv = animateDiv.parentNode;

let setIntervalMoveId;

function myMove() {
    setIntervalMoveId = setInterval(moveToRight, 1);
}

let currentLeft = 0;
let leftValueToStop = containerDiv.offsetWidth - animateDiv.offsetWidth + "px";

function moveToRight() {
    if (animateDiv.style.left == leftValueToStop) {
        clearInterval(setIntervalMoveId);
    }
    currentLeft++;
    animateDiv.style.left = currentLeft + "px";
}