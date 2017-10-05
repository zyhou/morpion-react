import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainMenu from './mainMenu';
import Board from './board';
import { resetGame, addMove } from '../actions';

export const App = ({ squares, currentPlayer, onSetSquare }) => (
    <div className="game">
        <div className="game-info">
            <MainMenu />
        </div>
        <div className="game-board">
            <Board squares={squares} onClick={i => onSetSquare(i, currentPlayer)} />
        </div>
    </div>
);

App.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPlayer: PropTypes.string.isRequired,
    onSetSquare: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    currentPlayer: state.game.player,
    squares: state.game.board,
});

const mapDispatchToProps = dispatch => ({
    onSetSquare: (square, player) => {
        dispatch(addMove(square, player));
    },
    onReset: () => {
        dispatch(resetGame());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
