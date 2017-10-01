import { combineReducers } from 'redux';

import squares from './squares';
import player from './player';

const TicTacToeApp = combineReducers({ squares, player });
export default TicTacToeApp;
