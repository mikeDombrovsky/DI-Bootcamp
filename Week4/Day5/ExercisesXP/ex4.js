// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks.This is an array of objects.Each object is a book that has 4 keys(ie. 4 properties) :
// - title,
// - author,
// - image : a url,
// - alreadyRead : which is a boolean(true or false).

// Initiate the array with 2 books of your choice(ie.Add manually 2 books objects in the array)

let allBooks = [
    {
        title: "The Lord of the Rings",
        author: "John Ronald Reuel Tolkien",
        image: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: true
    },
    {
        title: "The Call of the Wild",
        author: "Jack London",
        image: "https://images.penguinrandomhouse.com/cover/9780451531346",
        alreadyRead: true
    }
];

// Using the DOM, render the books inside an HTML table(the HTML table must be added to the < div > created in part 1).
let div = document.getElementsByClassName("ListBooks")[0];
console.log(div);
let table = document.createElement("table");

for (const book of allBooks) {
    let tr = document.createElement("tr");
    // For each book:
    // You have to display the book’s title and the book’s author.
    //     Example: HarryPotter written by JKRolling.
    // The width of the image has to be set to 100px.
    tr.innerHTML =
        `
      <td>${book.title} written by ${book.author}</td>
      <td><img src="${book.image}" width="100px"></td>
        `;
    // If the book is already read.Set the color of the book’s details to red.
    if (book.alreadyRead) {
        tr.style.color = "red";
    }
    table.appendChild(tr);
}

div.appendChild(table);

