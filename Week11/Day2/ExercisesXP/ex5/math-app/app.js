const lodash = require('lodash');
const { add, multiply } = require('./math.js')

test();

function test() {
    if (add(2, 2) === lodash.add(2, 2)) {
        console.log("sum test passed");
    } else {
        console.log('sum text failed');
    }

    if (multiply(2, 3) === lodash.multiply(2, 3)) {
        console.log("multiply test passed");
    } else {
        console.log('multiply text failed');
    }
}

