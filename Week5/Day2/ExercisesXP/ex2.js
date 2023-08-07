// Retrieve the form and console.log it.
const form = document.forms[0];
console.log(form);

// Retrieve the inputs by their id and console.log them.
console.log(form.fname, form.lname);

// Retrieve the inputs by their name attribute and console.log them.
console.log(form.firstname, form.lastname);

// When the user submits the form(ie.submit event listener)
// use event.preventDefault(), why ?
form.addEventListener("submit", e => {
    e.preventDefault();//to prevent the page reload 

    // get the values of the input tags,
    let name_value = form.fname.value;
    let last_name_value = form.lname.value;

    // make sure that they are not empty,
    if (name_value && last_name_value) { 
        // create an li per input value,
        const name_li = document.createElement("li");
        const lastname_li = document.createElement("li");
        name_li.innerText = `${name_value}`;
        lastname_li.innerText = `${last_name_value}`;
        const ul = document.querySelector("ul.usersAnswer"); 

        // then append them to a the < ul class="usersAnswer" ></ul >, below the form.
        ul.append(name_li, lastname_li);
        form.fname.value = "";
        form.lname.value = "";
    }
});
