const main = document.querySelector("main");


fillMain();



function fillMain() {
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        
        main.appendChild(div);
    }
}


function clearField(){
    
}

