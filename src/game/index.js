
export const getWinner = (board) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
};

export const isValidMove = (board, square) => {
    // Invalid move when square is not available
    if (board[square]) return false;

    // Invalid mode when game is over
    if (getWinner(board)) return false;

    return true;
};

export const switchPlayer = player => (
    player === 'X' ? 'O' : 'X'
);

export const setMove = (board, player, index) => (
    board.map((item, square) => (square === index ? player : item))
);

export const addMove = (board, player, square) => {
    if (!isValidMove(board, square)) {
        return false;
    }

    const newBoard = setMove(board, player, square);
    const newPlayer = switchPlayer(player);

    return { board: newBoard, player: newPlayer };
};

export const getInitBoard = () => (
    Array(9).fill(null)
);
