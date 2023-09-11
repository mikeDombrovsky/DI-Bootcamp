/*

Create a function that takes a date object and return string in the following format: YYYYMMDDHHmmSS.

The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00 - 23), 2 digit minute and 2 digit second.
If any of the value has only single digit, you must use zero prefix, so that the result string length is always the same.
Examples:
formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"
formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"
formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"
*/

testFormatDate();

function formatDate(date) {
    return ''.concat(date.getFullYear())
        .concat(formatNum(formatMonth(date.getMonth())))
        .concat(formatNum(date.getDate()))
        .concat(formatNum(date.getHours()))
        .concat(formatNum(date.getMinutes()))
        .concat(formatNum(date.getSeconds()));
}

function formatMonth(num) {
    num++;
    return formatNum(num);
}

function formatNum(num) {
    if (num.toString().length === 1) {
        return '0'.concat(num);
    }
    return num;
}


//new Date(year,month(0-11),day,hours,minutes,seconds,ms)
function testFormatDate() {
    if (
        formatDate(new Date(2020, 6, 4, 8, 0, 0)) === "20200704080000" &&
        formatDate(new Date(2019, 11, 31, 23, 59, 59)) === "20191231235959" &&
        formatDate(new Date(2020, 6, 4)) === "20200704000000"
    ) {
        console.log('TESTS PASSED');
    } else {
        console.log('TESTS FAILED');
    }
}