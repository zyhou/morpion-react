import React from 'react';
// const ActionCreator = require('../actions/BoardActionCreators');

let Colonne = React.createClass({
  render() {
    return (
      <div className="column">
        {this.props.children}
      </div>
    );
  }

});

module.exports = Colonne;