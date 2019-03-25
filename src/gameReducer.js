const calculateWinner = squares => {
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export const getStatus = (squares, currentPlayer) => {
    const winner = calculateWinner(squares);
    if (winner) {
        return `${winner} has won the game!`;
    } else if (squares.every(Boolean)) {
        return 'It is a tie!';
    } else {
        return `Next player: ${currentPlayer}`;
    }
};

export const gameReducer = (state, action) => {
    const { squares, currentPlayer } = state;
    switch (action.type) {
        case 'SELECT_SQUARE': {
            const { square } = action;
            const winner = calculateWinner(squares);
            if (winner || squares[square]) {
                return state;
            }
            const squaresCopy = [...squares];
            squaresCopy[square] = currentPlayer;
            return {
                squares: squaresCopy,
                currentPlayer: currentPlayer === 'X' ? '0' : 'X',
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}. Please fix it. Thank you.`);
        }
    }
};
