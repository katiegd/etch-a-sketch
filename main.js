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
const boardGrid = document.querySelector('#board');
let color = "black";

// Event listeners 
inputSize.addEventListener('click', showInputHint); //clicking the input field

// Setting board div size
const board = document.querySelector('#board');
board.style.width = board.style.height = `${gridSize}px`;

// Function to create the grid
function createBoard() {
    let boardSize = inputSize.value;
    const numDivs = (boardSize * boardSize);

    for(let i = 0; i < numDivs; i++) {
        if(boardSize > 2 && boardSize < 99) { 
            console.log(boardSize);
        const boardCell = document.createElement('div');

        boardCell.style.width = boardCell.style.height = `${(gridSize/boardSize)-2}px`;

        boardCell.classList.add('cell');
        board.appendChild(boardCell);
            
        boardCell.addEventListener('mouseover', colorSquare);
        }
        else {
            inputHint.textContent = "Error. Please input a number between 2 and 99.";
        }
        // blueBtn.addEventListener('click', function (e) {
        //     const boardCell = document.querySelector('.cell');
        //     boardCell.addEventListener('mouseover', changeColorBlue);
        // })
    }
    }

// Function to delete grids upon new size entry.
function removeCells() {
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

// Function to show prompt when input is clicked.
function showInputHint() {
    inputHint.textContent = "Enter a value between 2 and 99.";
}

function removeInputHint() {
    inputHint.textContent = "";
}

// Function to change color when hovered over.
function colorSquare() {
    if(color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`;
    }
    else {
        this.style.backgroundColor = color;
}
}
function changeColor(choice) {
    color = choice;
}

// Runs function to create board.
createBoard();