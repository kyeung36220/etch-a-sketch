let rows = 10
let cols = 10
let cellSize = 6
let drawingSpaceSize = 600


const gridContainer = document.querySelector(".gridContainer")
gridContainer.style.height = `${drawingSpaceSize}px`
gridContainer.style.width = `${drawingSpaceSize}px`

for (let i=0; i < cols; i++) {
   for (let j = 0; j < rows; j++) {
    const cell = document.createElement("div")

    //setting up cell style
    cell.className = "cell"
    cell.style.backgroundColor = "white"
    cell.style.padding = `${(drawingSpaceSize / rows) / 2}px`
    cell.style.textAlign = "center"
    gridContainer.appendChild(cell)
   }  
}

function onmouseHover(e) {
   e.target.style.backgroundColor = "black"
}

cells = document.querySelectorAll(".cell")
cells.forEach((cell) => {
   cell.addEventListener("mouseover", onmouseHover)
})