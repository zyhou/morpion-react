import React from 'react';
import PropTypes from 'prop-types';
import { GameConsumer } from './App';

export const SquareWithoutContext = ({ value, onClick, tabIndex }) => (
    <div
        className={`square player${value}`}
        onClick={() => onClick(tabIndex)}
        role="button"
        tabIndex={tabIndex}
    >
        {value}
    </div>
);

SquareWithoutContext.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired,
};

export const Square = props => (
    <GameConsumer>
        {({ onClick }) => <SquareWithoutContext {...props} onClick={onClick} />}
    </GameConsumer>
);
