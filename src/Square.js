import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, onClick, tabIndex }) => (
  <div
    className={`square player${value}`}
    onClick={onClick}
    role="button"
    tabIndex={tabIndex}
  >
    {value}
  </div>
);

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
};

export default Square;
