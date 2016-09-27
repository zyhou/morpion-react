import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/AppConstants';

var BoardActionCreators = {

    playPosition: function (pos) {
        AppDispatcher.dispatch({
            actionType: Constants.ActionTypes.PLAY_POSITION,
            pos: pos
        });
    },

    restartGame: function () {
        AppDispatcher.dispatch({
            actionType: Constants.ActionTypes.RESTART_GAME
        });
    }

};

module.exports = BoardActionCreators;