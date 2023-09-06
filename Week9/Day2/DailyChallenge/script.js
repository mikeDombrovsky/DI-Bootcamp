const form = document.forms[0];
const name_input = form.name;
const lastname_input = form.lastname;

form.addEventListener('submit', print)

function print(e) {
    e.preventDefault();
    const obj = {
        name: name_input.value,
        lastname: lastname_input.value
    }

    console.log(JSON.stringify(obj));
    const p = document.createElement('p');
    p.innerHTML = JSON.stringify(obj);
    document.body.appendChild(p);
}