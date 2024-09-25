

function createGrid(gridDimension) {
    gridDimension = gridDimension !== null && gridDimension > 0 && gridDimension <= 100 ? gridDimension : 16;

    const grid = document.querySelector("#grid-container");

    for(let x = 0; x < gridDimension; x++) {
        const gridRow = document.createElement("div");
        gridRow.className = "grid-row";
        for(let y = 0; y < gridDimension; y++) {
            const gridSquare = document.createElement("div");
            gridSquare.className = "grid-square";
            gridSquare.textContent = 0;
            gridRow.appendChild(gridSquare);
        }
        grid.appendChild(gridRow);
    }
}