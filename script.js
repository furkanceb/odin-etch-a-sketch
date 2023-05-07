const container=document.querySelector(".container");

for(let j=0;j<16;j++){
    const divGrid = document.createElement("div");
    container.appendChild(divGrid);
    for(let i=0;i<16;i++){
        const divGridInside = document.createElement("div");
        divGridInside.classList.add("divGridInside")
        divGrid.appendChild(divGridInside);
    }
    }

let penColor="black";

const grid = document.querySelectorAll(".divGridInside");


grid.forEach(element =>{
  element.addEventListener("mouseover",startDrawing);
  element.addEventListener("mousedown",draw);
 });

 function startDrawing(event){
  draw(event);


 }

 function draw(event){
  if (event.buttons === 1){
    event.target.style.backgroundColor=penColor;
  }

 }
 