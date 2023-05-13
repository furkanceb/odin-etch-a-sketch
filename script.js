const container=document.querySelector(".container");

for(let j=0;j<64;j++){
    const divGrid = document.createElement("div");
    container.appendChild(divGrid);
    for(let i=0;i<64;i++){
        const divGridInside = document.createElement("div");
        divGridInside.classList.add("divGridInside")
        divGrid.appendChild(divGridInside);
    }
    }

let penColor="black";
let currentTool=document.querySelector(".pen");
currentTool.classList.add("active-tool");
console.log(currentTool.classList);
const grid = document.querySelectorAll(".divGridInside");
console.log(currentTool);

grid.forEach(element =>{
  element.addEventListener("mouseover",draw);
  element.addEventListener("mousedown",draw);
 });

 function draw(event){
  if (event.buttons === 1){
    event.target.style.backgroundColor=penColor;
  }

 }
 
 const toolObjects=document.querySelectorAll(".tool-object");

 toolObjects.forEach(toolObject =>{
  toolObject.addEventListener("click",chooseTool);
 });

 function chooseTool(event){
  currentTool.classList.remove("active-tool");
  currentTool=event.target;
  currentTool.classList.add("active-tool");
  console.log(currentTool);
  
}

 



 
 