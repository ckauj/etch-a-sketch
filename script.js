

function createGrid(gridDimension) {
    gridDimension = gridDimension !== null && gridDimension > 0 && gridDimension <= 100 ? gridDimension : 16;
    const grid = document.querySelector("#grid-container");
    
    clearGrid();

    for(let x = 0; x < gridDimension; x++) {
        const gridRow = document.createElement("div");
        gridRow.className = "grid-row";
        for(let y = 0; y < gridDimension; y++) {
            const gridSquare = document.createElement("div");
            gridSquare.className = "grid-square";

            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            gridSquare.addEventListener("mouseover", function() {
                gridSquare.style.backgroundColor = `rgb(${red},${green},${blue})`;
                gridSquare.style.opacity = Number(gridSquare.style.opacity) + 0.1;
            });
            gridRow.appendChild(gridSquare);
        }
        grid.appendChild(gridRow);
    }
}

function clearGrid() {
    const grid = document.querySelector("#grid-container");
    grid.textContent = "";
}

function main() {
    createGrid();

    const resizeGrid = document.querySelector("#resize-grid");
    resizeGrid.addEventListener("click", function() {
        let gridDimension = prompt("Enter new grid dimensions", 16);
        createGrid(gridDimension);
    });

    const resetGrid = document.querySelector("#clear-grid");
    resetGrid.addEventListener("click", function() {
        clearGrid();
        createGrid();
    });
}