// let node = document.getElementById("ul");
// console.log(typeof node);
// console.log(node.children);

// const div = document.querySelector("div.div3");
// const divs = document.querySelectorAll("div");


// console.log(div, divs);
// console.log(div[0]);


// For each of the questions, find 2 WAYS of accessing:

// 1. The div DOM node ?
let div = document.querySelector("div");

//     2. The ul DOM node ?
let ul1= document.querySelector("ul");
let ul2 = document.lastChild;
console.log(ul1, ul2);
//         3. The second li(with Pete)?
let li = document.querySelector("ul").lastElementChild;
let li1 = ul1.querySelector(":nth-child(2)")
console.log(li, li1.innerHTML);
let li2 = document.getElementsByTagName("body")[0].firstElementChild;
console.log(li2);
li2.append("lol 1 ");
li2.append("lol 2 ");
const img = document.createElement("img");
img.src = "www.img.img";
img.setAttribute("src", "www.img.img")

























