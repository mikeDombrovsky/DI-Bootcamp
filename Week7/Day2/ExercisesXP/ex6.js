let bankAmount = 0;
const VAT = 0.17;
const expenses = ["+200", "-100", "+146", "+167", "-2900"];

const cutPieceForRichMen = () => {
    expenses.forEach((expense, i, arr) => {
        let intExpense = parseInt(expense);
        console.log('intExpense=',intExpense);
        intExpense = intExpense - Math.abs(intExpense * VAT); 
        arr[i] = intExpense.toString();
    });
};

console.log(`Your expences before Rich Men cut a piece: `, expenses);
cutPieceForRichMen();
console.log(`Your expences after Rich Men cut a piece: `, expenses);

expenses.forEach(expense => bankAmount += parseInt(expense));
console.log('At the end of the month your account balance is : ', bankAmount, 'nis');