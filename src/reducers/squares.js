const board = Array(9).fill(null);

const squares = (state = board, action) => {
    switch (action.type) {
        case 'ADD_MOVE':
            return state.map((item, square) => (square === action.square ? action.player : item));
        case 'RESET':
            return board;
        default:
            return state;
    }
};

export default squares;
