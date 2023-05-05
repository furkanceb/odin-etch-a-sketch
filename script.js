
for(let j=0;j<16;j++){
    const divGrid = document.createElement("div");
    const container=document.querySelector(".container");
    container.appendChild(divGrid);
    for(let i=0;i<16;i++){
        const divGridInside = document.createElement("div");
        divGridInside.style.border="2px solid red";
        divGridInside.style.width="40px"
        divGridInside.style.height="40px"
        divGrid.appendChild(divGridInside);
    }
    }
