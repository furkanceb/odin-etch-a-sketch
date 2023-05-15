const container=document.querySelector(".container");
let divGridInside;

//create 64X64 canvas
for(let j=0;j<64;j++){
    const divGrid = document.createElement("div");
    container.appendChild(divGrid);
    for(let i=0;i<64;i++){
        divGridInside = document.createElement("div");
        divGridInside.classList.add("divGridInside");
        divGrid.appendChild(divGridInside);
    }
    }

//default settings for the first time using
let penColor="black";
let currentTool=document.querySelector(".pen");
currentTool.classList.add("active-tool");
 
//mouse events for the functions draw and erase 
 const grid = document.querySelectorAll(".divGridInside");
 grid.forEach(element =>{
   element.addEventListener("mouseover",move);
   element.addEventListener("mousedown",move);
  });


 //mouse events for choosing tools
 const toolObjects=document.querySelectorAll(".tool-object");
 toolObjects.forEach(toolObject =>{
  toolObject.addEventListener("click",chooseTool);
 });

 function chooseTool(event){
  currentTool.classList.remove("active-tool");
  currentTool=event.currentTarget;
  currentTool.classList.add("active-tool");
  console.log(currentTool.classList[0]);

}

function move(event){
 
  switch(currentTool.classList[0]){
  case "pen":
    draw(event);
    break;
  case "eraser":
    erase(event);
  
 }

} 

function draw(event){
  if (event.buttons === 1){
    event.target.style.backgroundColor=penColor;
  }
console.log( "drawing now...")
 }

 function pickColor(){

}

function fill(){

}

function erase(event){
  
  if (event.buttons === 1){
    event.target.style.backgroundColor=window.getComputedStyle(divGridInside).getPropertyValue('background-color');
  }
console.log("erasing now...")
}

function changeColor(){


}
 
