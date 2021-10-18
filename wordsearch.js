/* word search */

// select the container that will hold the cells
const grid = document.querySelector(".grid");

// generate some cells, where value will be the number of cells we want to add to the grid.

function createCells(value) {
    for(let i = 1; i <= value; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("id", `cell${i}`);
        cell.textContent = ""; // anything for now, so it will appear on the page
        grid.appendChild(cell);
    }
}

createCells(168);


// array of words and array of letters //

const words = [
    'arrowhead', 
    'calathea',
    'peperomiodes',
    'ficus',
    'philodendron',
    'horsehead',
    'pothos',
    'monstera',
    'peacelily',
    'begonia',
];

const letters = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

