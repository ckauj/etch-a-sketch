

function createGrid(gridDimension) {
    gridDimension = gridDimension !== null && gridDimension > 0 && gridDimension <= 100 ? gridDimension : 16;

    const grid = document.querySelector("#grid-container");

    let divCounter = gridDimension * gridDimension;
    while(divCounter-- > 0) {
        const gridSquare = document.createElement("div");
        gridSquare.textContent = "test";
        grid.appendChild(gridSquare);
    }
}