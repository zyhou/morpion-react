import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, onClick }) => (
    <div className="square" onClick={onClick} role="button" tabIndex={value}>
        {value}
    </div>
);

Square.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Square;
