import React from 'react';
import PropTypes from 'prop-types';
import { GameConsumer } from './App';

export const MainMenuWithoutContext = ({ text }) => <h1 className="title">{text}</h1>;

MainMenuWithoutContext.propTypes = {
    text: PropTypes.string.isRequired,
};

export const MainMenu = () => (
    <GameConsumer>{({ message }) => <MainMenuWithoutContext text={message} />}</GameConsumer>
);
