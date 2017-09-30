import React from "react";
import PropTypes from "prop-types";

const Square = ({ value }) => <button className="square">{value}</button>;

Square.propTypes = {
    value: PropTypes.string.isRequired
};

export default Square;
