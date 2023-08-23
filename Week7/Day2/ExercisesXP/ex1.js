// #1 PREDICTION: a is function scope variable and will be changed to 3
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared
// with const instead of let ? PREDICTION: Error, const cant be changed

//#2 PREDICTION: a = 0, because funcTwo() wasn't called
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:  PREDICTION: inside the funcThree function 0, inside the funcThree function 5
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared
// with const instead of let ? PREDICTION: Error, const cant be changed


//#3
function funcFour() {
    window.a = "hello";
}

//didnt know that it will call window.a and return obj
function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4  PREDICTION: inside the funcSix function test
let a2 = 1;
function funcSix() {
    let a2 = "test";
    alert(`inside the funcSix function ${a2}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared
// with const instead of let ? Nothing, in the function it is another variable

//#5 PREDICTION: in the if block 5 outside of the if block 2
let a3 = 2; 
if (true) {
    let a3 = 5;
    alert(`in the if block ${a3}`);
}
alert(`outside of the if block ${a3}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ?  Nothing, in the function it is another variable