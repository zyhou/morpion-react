const SmartCSS = require('smart-css');
const React = require('react');
const ReactDOM  = require('react-dom');
const App = require('./components/App.js');

ReactDOM.render(<App />, document.getElementById('content'));

SmartCSS.injectStyles();
