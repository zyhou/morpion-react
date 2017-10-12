import { getInitBoard, switchPlayer, isValidMove, setMove } from './index';

describe('tic tac toe logic', () => {
    test('getInitBoard should return array of 9 null value', () => {
        const board = getInitBoard();
        expect(board.length).toBe(9);
        expect(board).toContain(null);
    });

    describe('switchPlayer', () => {
        test('current player are X should return O', () => {
            expect(switchPlayer('X')).toBe('O');
        });
        test('current player are O should return X', () => {
            expect(switchPlayer('O')).toBe('X');
        });
    });

    describe('isValidMove', () => {
        test('empty square should return true', () => {
            const board = getInitBoard();
            const isValid = isValidMove(board, 0);
            expect(isValid).toBe(true);
        });

        test('full square should return false', () => {
            const board = getInitBoard();
            board[0] = 'X';
            const isValid = isValidMove(board, 0);
            expect(isValid).toBe(false);
        });

        test('winner board should move anywhere', () => {
            const board = ['X', 'X', 'X', null, null, null, null, null, null];
            expect(isValidMove(board, 4)).toBe(false);
        });
    });

    describe('setMove', () => {
        test('empty square should return full with X', () => {
            const board = getInitBoard();
            const newBoard = setMove(board, 'X', 0);
            expect(newBoard).toContain('X');
        });
    });
});
