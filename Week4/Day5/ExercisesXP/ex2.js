// Add a “light blue” background color and some padding to the < div >.
let div = document.querySelector("div");
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// Do not display the < li > that contains the text node “John”.(the first < li > of the < ul >)
let ul = document.querySelector("ul");
ul.firstElementChild.style = "display: none";

// Add a border to the < li > that contains the text node “Pete”.(the second < li > of the < ul >)
ul.lastElementChild.style.border = "black solid 1px";

// Change the font size of the whole body.
document.body.style.fontSize = "25px";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (div.style.backgroundColor === "lightblue"){
    
    ul.querySelectorAll("li").forEach(
        li => {
            alert(li.innerHTML);
        }
    );
}