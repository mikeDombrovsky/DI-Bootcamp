const divon = document.querySelector("#divon");
console.log(divon);
let pos_left = 0;
let pos_top = 0;

divon.addEventListener("dblclick", e => move(e));

divon.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "blue";
    e.target.style.color = "white";
    e.target.classList.add("over_effect");
});

divon.addEventListener("mouseout", e => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
    e.target.classList.remove("over_effect");
});

divon.addEventListener("click", e => {
    toggle_border(e);
});

function toggle_border(e) {
    let border = e.target.style.border;
    if (border == "8px solid red") {
        e.target.style.border = "1px solid black";
    } else {
        e.target.style.border = "8px solid red";
    }
}



function move(e) {
    let direction = Math.round(Math.random() * 3 + 1);
    console.log(direction, pos_left, pos_top);

    switch (direction) {
        case 1:
            pos_left += 100;
            if (pos_left < 0) pos_left = -pos_left;
            e.target.style.left = pos_left + "px";
            break;
        case 2:
            pos_left -= 100;
            if (pos_left < 0) pos_left = -pos_left;
            e.target.style.left = pos_left + "px";
            break;
        case 3:
            pos_top += 100;
            if (pos_top < 0) pos_top = -pos_top;
            if (pos_top > 500) pos_top /= pos_top;
            e.target.style.top = pos_top + "px";
            break;
        case 4:
            pos_top -= 100;
            if (pos_top < 0) pos_top = -pos_top;
            e.target.style.top = pos_top + "px";
            break;
        default:
            console.log("smth strange!");
    }
    console.log(direction);
};