const form = document.forms[0];

form.addEventListener('submit', login);

async function login(e) {
    e.preventDefault();
    const user = {
        userName: form.username.value,
        password: form.password.value
    }

    const resp = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
    const data = await resp.json();
    const divMessage = document.querySelector('div.message');
    if (resp.ok) {
        divMessage.innerHTML = `<div class="reg_msg">${data.message}</div>`;
    } else {
        divMessage.innerHTML = `<div class="err_msg">${data.error}</div>`;
    }
    setTimeout(() => divMessage.innerHTML = '', 3000);
}