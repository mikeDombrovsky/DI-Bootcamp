
Promise.resolve(3).then((res, rej) => console.log(res));


Promise.reject('Boo!').catch(err => console.error(err));