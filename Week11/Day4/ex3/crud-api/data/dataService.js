const axios = require('axios');

async function fetchPosts(){
    return axios('https://jsonplaceholder.typicode.com/posts');
}

module.exports = { fetchPosts };