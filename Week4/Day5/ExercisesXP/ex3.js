// Using Javascript, in the < div >, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let div = document.querySelector("#navBar");
div.setAttribute("id", "socialNetworkNavigation");
console.log(div);

// We are going to add a new < li > to the < ul >.
//     First, create a new < li > tag(use the createElement method).
let new_li = document.createElement("li");

// Create a new text node with “Logout” as its specified text.
let newTextNode = document.createTextNode("Logout");


// Append the text node to the newly created list node(<li>).
new_li.append(newTextNode);

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let ul = document.querySelector("ul");
ul.appendChild(new_li);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);

