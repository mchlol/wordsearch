/* word search */
console.log("it works")

// select the container that will hold the cells
const grid = document.querySelector(".grid");

// generate some cells! value will be the number of cells we want to add to the grid.

function createCells(value) {
    for(let i = 0; i <= value; i++) {
        let cell = document.createElement("span");
        cell.classList.add("cell");
        cell.setAttribute("id", `cell${i}`);
        cell.textContent = "A"; // anything for now, so it will appear on the page
        grid.appendChild(cell);
    }
    // let cells = document.querySelectorAll(".cell"); // select all the cells... to do what with?
}

createCells(20);


