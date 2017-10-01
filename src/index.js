import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './app';
import TicTacToeApp from './reducers';
import styles from './styles.css'; // eslint-disable-line no-unused-vars

/* eslint-disable no-underscore-dangle */
const store = createStore(
    TicTacToeApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
