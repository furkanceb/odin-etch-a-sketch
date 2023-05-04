for(let j=0;j<16;j++){
    const divGrid = document.createElement("div");
    const container=document.querySelector(".container");
    container.appendChild(divGrid);

    for(let i=0;i<16;i++){
        const divGridInside = document.createElement("div");
        divGrid.appendChild(divGridInside);
    }
    }
