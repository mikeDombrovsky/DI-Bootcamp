
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target.
const box = document.getElementById("box");
const target = document.getElementById("target");

box.draggable = true;
box.addEventListener("dragstart", dragStart);

target.addEventListener("dragover",dragOver);
target.addEventListener("drop", dragDrop);

document.body.addEventListener("dragover", dragOver);
document.body.addEventListener("drop", dragDrop);

function dragStart(e){
    e.dataTransfer.setData("startId", e.target.id);
}

function dragOver(e){
    e.preventDefault();
}

function dragDrop(e){
    e.preventDefault();
    let id = e.dataTransfer.getData("startId");
    e.target.appendChild(document.getElementById(id));
}