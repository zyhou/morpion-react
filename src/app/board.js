import React from 'react';
import PropTypes from 'prop-types';

import Square from './square';

const renderSquare = value => <Square value={value} />;

const Board = ({ squares }) => (
    <div>
        <div className="board-row">
            {renderSquare(squares[0])}
            {renderSquare(squares[1])}
            {renderSquare(squares[2])}
        </div>
        <div className="board-row">
            {renderSquare(squares[3])}
            {renderSquare(squares[4])}
            {renderSquare(squares[5])}
        </div>
        <div className="board-row">
            {renderSquare(squares[6])}
            {renderSquare(squares[7])}
            {renderSquare(squares[8])}
        </div>
    </div>
);

Board.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Board;
