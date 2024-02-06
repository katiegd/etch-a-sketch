// Setting main grid board size
const gridSize = 500;
const defaultSides = 16;

// Setting constant variables for our interactive elements. 

const inputSize = document.querySelector('#boardSize');
const enterBtn = document.querySelector('#inputEnterBtn');
const blackBtn = document.querySelector('#blkBtn');
const blueBtn = document.querySelector('#blueBtn');
const randomBtn = document.querySelector('#randomBtn');
const clearBtn = document.querySelector('#clearBtn');
const inputHint = document.querySelector('#hint');

// Event listener for clicking the input field.
inputSize.addEventListener('click', showInputHint);

// Setting board div size
const board = document.querySelector('#board');
board.style.width = board.style.height = `${gridSize}px`;

// Function to create the grid
function createBoard() {
    let boardSize = inputSize.value;
    const numDivs = (boardSize * boardSize);

    for(let i = 0; i < numDivs; i++) {
        const boardCell = document.createElement('div');

        boardCell.style.width = boardCell.style.height = `${(gridSize/boardSize) - 2}px`;

        boardCell.classList.add('cell');
        board.appendChild(boardCell);
            
        }

    }

// Function to delete grids upon new size entry.
function removeGridCells() {
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

// Function to show prompt when input is clicked.
function showInputHint() {
    inputHint.textContent = "Enter a value between 2 and 99.";
}

// Function to change color when hovered over.
function changeColor() {
    this.style.backgroundColor = "black";
}

// Runs function to create board.
createBoard();