
import React from 'react';
import ActionCreator from '../actions/BoardActionCreators';
import PlayerToken from '../constants/PlayerToken';


let Case = React.createClass({

  getDefaultProps() {
    return {
      x: void 0,
      y: void 0,
      maCase: void 0
    };
  },

  onCaseHit() {
    let {x, y} = this.props;
    ActionCreator.playPosition({
      x: x,
      y: y
    });
  },

  render() {
    let {x, y, maCase} = this.props;
    let styleToken = maCase === 1 ? 'player1' : 'player2'
    return (
      <div onMouseDown={this.onCaseHit} className={"square " + styleToken}>
        {PlayerToken[maCase]}
      </div>
    );
  }

});

module.exports = Case;