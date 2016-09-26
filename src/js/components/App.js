const React = require('react');
const SmartCSS = require('smart-css');
const css = new SmartCSS({ name: 'app' });

let App = React.createClass({

    render() {
        return (
            <div>
                Bonjour !
            </div>
        );
    }

});

module.exports = App;
