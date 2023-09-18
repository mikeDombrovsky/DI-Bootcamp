const products = require('./products.js');

function findProduct(name) {
    for (let product of products) {
        if (product.name === name) {
            return product;
        }
    }
    throw Error('product not found');
}

console.log(findProduct('apple'));
console.log(findProduct('hamburger'));