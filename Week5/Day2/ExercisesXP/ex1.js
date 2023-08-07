// Using a DOM property, retrieve the h1 and console.log it.
const h1 =document.querySelector("h1");
console.log(h1);

// Using DOM methods, remove the last paragraph in the < article > tag.
const article = document.querySelector("article");
article.removeChild(article.lastElementChild);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = article.querySelector("h2");
h2.addEventListener("click", e => {
    e.target.style.backgroundColor = "red";
});

// Add an event listener which will hide the h3 when it’s clicked on(use the display: none property).
const h3 = article.querySelector("h3");
h3.addEventListener("click", e => {
    e.target.style.display = "none";
});

// Add a < button > to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const bold_btn = document.createElement("button");
bold_btn.innerText = "make bold";
bold_btn.addEventListener("click", function(e){
    e.target.parentElement.style.fontWeight = "bold";
});

article.appendChild(bold_btn);

//     BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
 h1.addEventListener("mouseover", function(e){
    let randomInt = Math.round(Math.random() * 100);
    h1.style.fontSize = randomInt + "px";
 });
// BONUS: When you hover on the 2nd paragraph, it should fade out(Check out “fade css animation” on Google)
const p2 = article.querySelectorAll("p")[1];
p2.addEventListener("mouseover", e => {
    p2.style.opacity = 0;
    p2.style.transition = "opacity 2s";
});