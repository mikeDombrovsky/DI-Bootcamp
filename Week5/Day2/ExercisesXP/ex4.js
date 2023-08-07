//v = 4 / 3 * pi * r^3
const form = document.forms[0];
const radius_input = form.radius;
const volume_input = form.volume;
radius_input.value = "";
let radius_value;
const calc_btn = form.submit;
console.log(radius_input,volume_input, submit);

radius_input.addEventListener("input", e => {

    if (isNaN(e.target.value)) {
        alert("radius must be a number");
        e.target.value = "";
        return;
    }
    radius_value = e.target.value;
    console.log("radius", radius_value);
});

calc_btn.addEventListener("click", e => {
    e.preventDefault();
    volume_input.value = 4 / 3 * Math.PI * Math.pow(radius_input.value, 3);
    console.log("volume - ", volume_input.value);
});