import { getInitBoard, addMove } from '../game';

const initGame = {
    board: getInitBoard(),
    player: 'X',
};

const game = (state = initGame, action) => {
    switch (action.type) {
        case 'ADD_MOVE': {
            const moveData = addMove(state.board, action.player, action.square);
            if (!moveData) {
                return { ...state };
            }

            return {
                ...state,
                player: moveData.player,
                board: moveData.board,
            };
        }
        case 'RESET':
            return initGame;
        default:
            return state;
    }
};

export default game;

