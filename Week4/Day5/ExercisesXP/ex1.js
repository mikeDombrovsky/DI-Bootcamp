
// Retrieve the div and console.log it
let div = document.querySelector("div");
console.log(div);

// Change the name “Pete” to “Richard”.
let ul1 = document.querySelector("ul");
let li_last = ul1.lastElementChild;
li_last.innerHTML = "Rechard";

// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
let ul2 = document.querySelectorAll("ul")[1];
let sarah = ul2.querySelectorAll("li")[1];
sarah.remove();

// Change each first name of the two <ul>'s to your name. (Hint : use a loop)
let uls = document.querySelectorAll("ul");
for(let ul of uls){
    ul.firstElementChild.innerHTML = "Mikhael";
}

//Bonus - Using Javascript:
// Add a class called student_list to both of the < ul > 's.
for (let ul of uls) {
    ul.classList.add("student_list");
}
// Add the classes university and attendance to the first < ul >.
ul1.classList.add("university", "attendance");