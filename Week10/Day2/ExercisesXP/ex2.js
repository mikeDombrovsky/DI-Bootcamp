new Promise((res, rej) =>
    setTimeout(res, 4000, 'success'))
    .then(res => console.log(res))
    .catch(err => console.log(err));