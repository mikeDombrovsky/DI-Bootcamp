

const main_btns_container = document.querySelector("#navbarSupportedContent>ul");
const main_btns = main_btns_container.querySelectorAll("li.nav-item>a");

addListenersToBtns(main_btns, setMainBtnAsActive);

//add listeners to portfolio btns for active status
const portfolio = document.querySelector("section#portfolio");
const btnContainer = portfolio.querySelector("div.navbar-nav");
const btns = portfolio.querySelectorAll("div.navbar-nav>a");

addListenersToBtns(btns, setBtnAsActive);

function addListenersToBtns(btns, func) {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", func);
    }
}

//add class active to active main btn
function setMainBtnAsActive() {
    let prevActiveBtn = main_btns_container.querySelector(".active");
    prevActiveBtn.classList.remove("active");
    this.classList.add("active");
}

//add class activ to active portfolio btn
function setBtnAsActive() {
    let prevActiveBtn = btnContainer.querySelector(".active");
    prevActiveBtn.classList.remove("active");
    this.classList.add("active");
}

function filter(e, class_name) {
    e.preventDefault();
    console.log("filter " + class_name);
    const projects = portfolio.querySelectorAll("div.img_col");
    for (const project of projects) {
        if (project.classList.contains(class_name)) {
            project.style.display = "block";;
        } else {
            project.style.display = "none";
        }

    }
}