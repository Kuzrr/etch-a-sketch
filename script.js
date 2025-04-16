function createGrid(gridSize) {
    const sketchBoard = document.querySelector(".sketch-board");
    for (let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++){
            const gridCube = document.createElement("div");
            gridCube.classList.add("gridCube");
            console.log(gridCube);
            gridCube.addEventListener("mouseout", () => gridCube.style.backgroundColor = "red")
            sketchBoard.appendChild(gridCube);
        }
        
    }

    
}

createGrid(16); 
