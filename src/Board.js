import React from 'react';
import { gameReducer, getStatus } from './gameReducer';

const Board = () => {
    const [state, dispatch] = React.useReducer(gameReducer, {
        squares: Array(9).fill(null),
        currentPlayer: 'X',
    });
    const { squares, currentPlayer } = state;

    const selectSquare = (square) => dispatch({ type: 'SELECT_SQUARE', square });

    const status = getStatus(squares, currentPlayer);

    const renderSquare = (index) => (
        <div
            className={`square player${squares[index]}`}
            onClick={() => selectSquare(index)}
            onKeyDown={() => selectSquare(index)}
            role="button"
            tabIndex={0}
        >
            {squares[index]}
        </div>
    );

    return (
        <React.Fragment>
            <div className="game-status">
                <h1 className="title">{status}</h1>
            </div>
            <div>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Board;
