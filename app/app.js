import Piece from './Piece.js';

const board = document.querySelector('.board');
const boardSize = board.clientWidth;

let row = true;

// render board
for (let i = 0; i<64; i++) {
    let square = document.createElement('div');
    square.style.width = `${boardSize / 8}px`;
    square.style.height = `${boardSize / 8}px`;
    square.classList.add('square');
    
    if (row) {
        square.classList.add(i % 2 == 0 ? 'w-square' : 'b-square')
    } else {
        square.classList.add(i % 2 == 0 ? 'b-square' : 'w-square')
    }
    //square.innerText = i
    board.appendChild(square);

    if ((i+1) % 8 == 0) {
        row = !row;
    }
}


// render pieces onto the board
let squares = board.childNodes;

squares.forEach((square, i) => {
    switch (i) {
        // blacks
        case 0:
        case 7:
            let bRook = new Piece(true, 'rook');
            square.appendChild(bRook);
            break;
        case 1:
        case 6:
            let bKnight = new Piece(true, 'knight');
            square.appendChild(bKnight);
            break;
        case 2:
        case 5:
            let bBishop = new Piece(true, 'bishop');
            square.appendChild(bBishop);
            break;
        case 4:
            let bKing = new Piece(true, 'king');
            square.appendChild(bKing);
            break;
        case 3:
            let bQueen = new Piece(true, 'queen');
            square.appendChild(bQueen);
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            let bPawn = new Piece(true, 'pawn');
            square.appendChild(bPawn);
            break;
        // whites
        case 56:
        case 63:
            let wRook = new Piece(false, 'rook');
            square.appendChild(wRook);
            break;
        case 57:
        case 62:
            let wKnight = new Piece(false, 'knight');
            square.appendChild(wKnight);
            break;
        case 58:
        case 61:
            let wBishop = new Piece(false, 'bishop');
            square.appendChild(wBishop);
            break;
        case 60:
            let wKing = new Piece(false, 'king');
            square.appendChild(wKing);
            break;
        case 59:
            let wQueen = new Piece(false, 'queen');
            square.appendChild(wQueen);
            break;
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
            let wPawn = new Piece(false, 'pawn');
            square.appendChild(wPawn);
            break;
    }
})


