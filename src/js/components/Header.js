import React from 'react';
import BoardStore from '../stores/BoardStore';
import ActionCreator from '../actions/BoardActionCreators';

let Header = React.createClass({

  onHeaderHit() {
    if(!BoardStore.gameEnded()) return;
    ActionCreator.restartGame();
  },

  render() {
    let titleText = '';
    let subTitleText = 'Clique ou appuie pour rejouer !';
    if(BoardStore.gameEnded()){
      titleText = 'Joueur ' + BoardStore.GetGagnant() + ' gagne!';
    }else{
      titleText = 'Joueur ' + BoardStore.getJoueurCourant() + ' a ton tour.';
      subTitleText = ''
    }
    return (
      <div onMouseDown={this.onHeaderHit}>
        <span className="titre">{titleText}</span>
        <span className="sous-titre">{subTitleText}</span>
      </div>
    );
  }

});

module.exports = Header;