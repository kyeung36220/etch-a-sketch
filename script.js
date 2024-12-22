let rows = 16
let cols = 16
let pixelSize = 40


const gridContainer = document.querySelector(".gridContainer")
gridContainer.style.height = `${cols * pixelSize}px`
gridContainer.style.width = `${rows * pixelSize}px`

for (let i=0; i < cols; i++) {
   for (let j = 0; j < rows; j++) {
    const cell = document.createElement("div")
    cell.style.backgroundColor = "white"
    cell.style.padding = `${pixelSize / 2}px`
    cell.style.textAlign = "center"
    gridContainer.appendChild(cell)
   }  
}