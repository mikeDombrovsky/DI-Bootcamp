// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function hello(){
    alert("Hello World..");
}
const setTimeOutHello = setTimeout(hello, 2000);

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph < p > Hello World</p > to the < div id = "container" >.
const container = document.getElementById("container");
function addHello(){
    const p = document.createElement("p");
    p.innerText = "Hello World";
    container.appendChild(p);
}
const setTimeOutAddHello = setTimeout(addHello, 2000);

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph < p > Hello World</p > to the < div id = "container" >.
const setInterval = setInterval(function(){
    
}, 1000);
// The interval will be cleared(ie.clearInterval), when the user will click on the button.
const btn = document.getElementById("clear");

function clear(){
    console.log("clear");
    setTimeOutHello.clear();
}
// Instead of clicking on the button, the interval will be cleared(ie.clearInterval) as soon as 
//there will be 5 paragraphs inside the < div id = "container" >.

