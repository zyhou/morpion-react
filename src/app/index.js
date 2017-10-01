import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainMenu from './mainMenu';
import Board from './board';
import { resetGame, addMove } from '../actions';

export const App = ({ squares }) => (
    <div className="game">
        <div className="game-info">
            <MainMenu />
        </div>
        <div className="game-board">
            <Board squares={squares} />
        </div>
    </div>
);

App.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
    player: state.player,
    squares: state.squares,
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
