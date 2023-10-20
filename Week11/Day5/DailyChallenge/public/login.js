const form = document.forms[0];

form.addEventListener('submit', login);

function login(e){
    e.preventDefault();
    console.log(form.username.value, form.password.value);
}