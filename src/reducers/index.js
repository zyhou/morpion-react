import { combineReducers } from 'redux';

import game from './game';

const TicTacToeApp = combineReducers({ game });
export default TicTacToeApp;
