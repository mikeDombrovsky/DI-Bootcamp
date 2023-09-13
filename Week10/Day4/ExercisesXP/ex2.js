// Analyse the code provided above before executing it - what will be the outcome ?
// GUESS: first will be printed 'calling', then after 2 seconds will be printed resolved promise

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();