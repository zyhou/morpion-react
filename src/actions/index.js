export const addMove = (cell, player) => ({
    type: 'ADD_MOVE',
    cell,
    player,
});

export const resetGame = () => ({
    type: 'RESET',
});
