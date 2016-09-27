import AppDispatcher from '../dispatchers/AppDispatcher';
var EventEmitter = require('events').EventEmitter;
import Constants from '../constants/AppConstants';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';

let _data;
let _currentPlayer;
let _winner;
let _gameEnded;

const BOARD_SIZE = 3;

function isCasePrise(x, y) {
    return _data[x][y] !== 0;
}

function setCase(x, y, playerId) {
    _data[x][y] = playerId;
}

function getJoueurCourant() {
    return _currentPlayer;
}

function switchJoueurs() {
    _currentPlayer = _currentPlayer === 1 ? 2 : 1;
}

function updateGagnant() {
    if (_winner !== void 0) return;

   // todo fonction de vérification pour voir qui a gagné

    return;
}

function hasCasesDisponible() {
    for (let x = 0; x < BOARD_SIZE; x++) {
        for (let y = 0; y < BOARD_SIZE; y++) {
            if (_data[x][y] === 0) return true;
        }
    }
}

function updatePartieFinit() {
    if (_winner !== void 0 || !hasCasesDisponible()) {
        _gameEnded = true;
    }
}

function reset() {
    _currentPlayer = 1;
    _data = [];
    _gameEnded = false;
    _winner = void 0;
    for (let x = 0; x < BOARD_SIZE; x++) {
        _data[x] = [];
        for (let y = 0; y < BOARD_SIZE; y++) {
            _data[x][y] = 0;
        }
    }
}

reset();

let BoardStore = assign({}, EventEmitter.prototype, {

    getCases() {
        return _data;
    },

    getPlateauTaille() {
        return BOARD_SIZE;
    },

    getJoueurCourant() {
        return getJoueurCourant();
    },

    gameEnded() {
        _gameEnded;
    },

    GetGagnant() {
        return _winner;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

AppDispatcher.register(function (action) {

    switch (action.actionType) {
        case Constants.ActionTypes.PLAY_POSITION:
            let {x, y} = action.pos;

            if (BoardStore.gameEnded()) return;
            if (isCasePrise(x, y)) return;

            setCase(x, y, getJoueurCourant());
            switchJoueurs()

            updateGagnant();
            updatePartieFinit();

            BoardStore.emitChange();
            break;
        case Constants.ActionTypes.RESTART_GAME:
            reset();
            BoardStore.emitChange();
            break;
    }
});

module.exports = BoardStore;