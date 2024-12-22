let rowsInitial = 20
let colsInitial = 20
let drawingSpaceSize = 600

//initialization
const gridContainer = document.querySelector(".gridContainer")
gridContainer.style.height = `${drawingSpaceSize}px`
gridContainer.style.width = `${drawingSpaceSize}px`

cellMaker(rowsInitial, colsInitial)

//making the functional board
function cellMaker(rows, cols) {

   gridContainer.innerHTML = ""

   for (let i=0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
       const cell = document.createElement("div")
   
       //setting up cell style
       cell.className = "cell"
       cell.style.backgroundColor = "white"
       cell.style.opacity = "0"
       cell.style.padding = `${(drawingSpaceSize / rows) / 2}px`
       cell.style.textAlign = "center"
       gridContainer.appendChild(cell)
      }  
   }

   function onmouseHover(e) {
      e.target.style.backgroundColor = `rgb(${rgbRandomizer()})`
      let currentOpacity = parseFloat(e.target.style.opacity) || 0;
      e.target.style.opacity = `${currentOpacity + 0.1}`
      
      function rgbRandomizer() {
         return `${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}`
      }
   }
   
   cells = document.querySelectorAll(".cell")
   cells.forEach((cell) => {
      cell.addEventListener("mouseover", onmouseHover)
   })
}

//editSize Button
function editSize() {
   while (true) {
      size = prompt("What resolution? (Max 100)")
      if (size > 0 && size < 100) {
         break
      }
   }
   cellMaker(size, size) // since same for row and col
}
const sizeButton = document.querySelector(".sizeButton")
sizeButton.addEventListener("click", editSize)