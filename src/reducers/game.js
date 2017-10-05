const board = Array(9).fill(null);

const initGame = {
    board,
    player: 'X',
};

const switchPlayer = player => (
    player === 'X' ? 'O' : 'X'
);

const setMove = (stateBoard, player, index) => (
    stateBoard.map((item, square) => (square === index ? player : item))
);

const game = (state = initGame, action) => {
    switch (action.type) {
        case 'ADD_MOVE':
            return {
                ...state,
                player: switchPlayer(action.player),
                board: setMove(state.board, action.player, action.square),
            };
        case 'RESET':
            return initGame;
        default:
            return state;
    }
};

export default game;

