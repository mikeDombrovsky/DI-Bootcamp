const form = document.forms[0];

form.addEventListener('submit', register);

function register(e) {
    e.preventDefault();
    console.log(form.username.value, form.password.value);
}