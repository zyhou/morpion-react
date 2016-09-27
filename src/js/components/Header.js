import React from 'react';
import BoardStore from '../stores/BoardStore';
import ActionCreator from '../actions/BoardActionCreators';
import PlayerToken from '../constants/PlayerToken';

let Header = React.createClass({

  onHeaderHit() {
    if (!BoardStore.gameEnded()) return;
    ActionCreator.restartGame();
  },

  render() {
    let titleText = '';
    let subTitleText = 'Clique pour rejouer.';
    if (BoardStore.gameEnded()) {
      let nomGagnant = BoardStore.getGagnant()
      if (nomGagnant === void 0) {
        titleText = 'Egalité.';
      }
      else {
        titleText = 'Joueur ' + PlayerToken[nomGagnant].toUpperCase() + ' gagne.';
      }
    } else {
      titleText = 'C\'est à ' + PlayerToken[BoardStore.getJoueurCourant()].toUpperCase() + ' de jouer.';
      subTitleText = ''
    }
    return (
      <div onMouseDown={this.onHeaderHit} className="header">
        <span className="titre">{titleText}</span>
        <span className="sous-titre">{subTitleText}</span>
      </div>
    );
  }

});

module.exports = Header;