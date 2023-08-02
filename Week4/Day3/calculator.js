let current_display = "0"

function number(num) {
    if (current_display == "0") {
        current_display = num + "";
    } else {
        current_display += num;
    }

    setValueToDisplay(current_display);
}

function operator(operator) {
    current_display += operator + "";
    setValueToDisplay(current_display)
}

function equal() {
    console.log(current_display);
    setValueToDisplay(compute(current_display));
    current_display = "0";
}

function clear_last() {
    if (current_display.length === 1) {
        current_display = "0"
    } else {
        current_display = current_display.slice(0, -1);
    } 
    setValueToDisplay(current_display);
}

function reset() {
    setValueToDisplay("0");
    current_display = "0"
}

function compute(value) {
    let regexp = /^\d+[+-/\*]\d+$/;
    if(!value.match(regexp)){
        
        console.log("regexp done", current_display);
        return "I can compute like: 2 + 2";
    }
    console.log(value, typeof value);
    let first_number = "";
    let second_number = "";
    let operator;
    let isOperatorFound = false;
    for (let i = 0; i < value.length; i++) {
        if (isNaN(value[i])) {
            console.log(i,value[i]);
            operator = value[i];
            isOperatorFound = true;
        }else if(!isOperatorFound){
            first_number += value[i];
        }else{
            second_number += value[i];
        }
    }
    console.log(first_number, second_number, operator);
    return calculate(first_number, second_number, operator);
}

function calculate(first, second, operator){
    first = Number.parseInt(first);
    second = Number.parseInt(second);
    
    if(operator == "+"){
        return first + second;
    }
    if(operator == "-"){
        return first - second;
    }
    if(operator == "*"){
        return first * second;
    }
    if(operator == "/"){
        if (second == 0) {
            return "Can not devide by 0";
        }
        return first / second;
    }
}



function setValueToDisplay(value) {
    const element = document.getElementById("display");
    element.innerHTML = `${value}`
}