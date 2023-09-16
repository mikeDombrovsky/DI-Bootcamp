//ebec2cf458fb98710c4dddc6
const API_KEY = 'ebec2cf458fb98710c4dddc6';
const form = document.forms[0];
form.addEventListener('submit', convert);
const switch_btn = document.querySelector('img#switch');
switch_btn.addEventListener('click', switchBaseCurrency);

const select_from = form.select_from;
const select_to = form.select_to;
const amount = form.amount;

const codes = fetchCodes();

async function fetchCodes() {
    const data = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`
    ).then(data => data.json());

    fillSelects(data.supported_codes);
    convert(new Event('submit'));
    return data.supported_codes;
}

function fillSelects(codes) {
    for (let i = 0; i < codes.length; i++) {
        let [key, value] = codes[i];
        const option = document.createElement('option');
        option.value = key;
        option.innerHTML = `${key} - ${value}`;

        const option2 = document.createElement('option');
        option2.value = key;
        option2.innerHTML = `${key} - ${value}`;

        select_from.appendChild(option);
        select_to.appendChild(option2);
    }
    select_from.value = 'USD';
    select_to.value = 'ILS';
    
}

async function convert(e){
    e.preventDefault();
    const data = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${select_from.value}/${select_to.value}/${amount.value}`
        ).then(data => data.json());
    console.log(data);
    showResult(data);
}

function showResult(result){
    const result_div = document.getElementById('result');
    let res = result.conversion_result.toFixed(2);
    let code = result.target_code;
    result_div.innerHTML = `${res} ${code}`;
}

function switchBaseCurrency(e){
    let from = select_from.value;
    select_from.value = select_to.value;
    select_to.value = from;
    convert(e);
}