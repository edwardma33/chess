const board = document.querySelector('.board');

const boardSize = board.clientWidth;

let row = 0;
const coordLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


// render board
let currentRowNumber = 8;
let currentRowLetter = 7;
for (let i = 0; i<64; i++) {
    let square = document.createElement('div');
    square.style.width = `${boardSize / 8}px`;
    square.style.height = `${boardSize / 8}px`;
    square.style.color = '#f6f';
    square.classList.add('square');

    // handle coord numbers and change zeros to 8s
    currentRowNumber = (i + 1) % 8
    currentRowNumber == 0 ? currentRowNumber = 8 : null
    square.innerText = coordLetters[currentRowLetter] + currentRowNumber;
    
    // alternate colors
    if (row % 2 == 0) {
        square.classList.add(i % 2 == 0 ? 'w-square' : 'b-square')
    } else {
        square.classList.add(i % 2 == 0 ? 'b-square' : 'w-square')
    }

    // add square to the board
    board.appendChild(square);


    if ((i+1) % 8 == 0) {
        currentRowLetter--;
        row++;
    }
}