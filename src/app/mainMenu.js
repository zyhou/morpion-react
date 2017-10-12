import React from 'react';
import PropTypes from 'prop-types';

const MainMenu = ({ text }) => <h1 className="title">{text}</h1>;

MainMenu.propTypes = {
    text: PropTypes.string.isRequired,
};

export default MainMenu;
