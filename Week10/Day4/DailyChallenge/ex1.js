// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

//     Example
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]
//promise.all waits till all responses are resolved or first is rejected and then returned array of resulted values.  
async function getResponses(promises) {
    try {
        const responses = await Promise.all(promises);
        return responses;
    } catch (err) {
        console.log(err);
    }
}

getResponses([promise1, promise2, promise3]).then(responses => {
    console.log(responses);
    return responses;
});