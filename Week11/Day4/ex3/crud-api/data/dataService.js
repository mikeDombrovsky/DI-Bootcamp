const axios = require('axios');

function fetchPosts() {
    return axios('https://jsonplaceholder.typicode.com/posts').then(resp => {
        return resp.data;
    }).catch(err => {
        console.log(err);
        return { err }
    });
}

module.exports = { fetchPosts };