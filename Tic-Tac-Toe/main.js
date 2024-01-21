const game = document.querySelector('.game');
const boxes = [];
let player = 1;
let moves = 0;

const checkForWin = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            return true;
        }
    }
    return false;
};

const newGame = () => {
    for (let i = 0; i < 9; i++) {
        boxes[i] = null;
    }
    game.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.dataset.index = i * 3 + j;
            box.addEventListener('click', play);
            game.appendChild(box);
        }
    }
    player = 1;
    moves = 0;
};

const play = (e) => {
    const box = e.target;
    if (!box.textContent) {
        box.textContent = player === 1 ? 'X' : 'O';
        box.classList.add('active');
        boxes[box.dataset.index] = player === 1 ? 'X' : 'O';
        player = player === 1 ? 2 : 1;
        moves++;
        if (checkForWin()) {
            alert(`Player ${player} wins!`);
            newGame();
        } else if (moves === 9) {
            alert('It\'s a tie!');
            newGame();
        }
    }
};

newGame();