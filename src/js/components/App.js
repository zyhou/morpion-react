import React from 'react';
import BoardStore from '../stores/BoardStore';
import Case from './Case.js';
import Colonne from './Colonne.js';

let App = React.createClass({

    _onChange() {
        this.forceUpdate();
    },

    componentDidMount() {
        BoardStore.addChangeListener(this._onChange)
    },

    componentWillUnmount() {
        BoardStore.removeChangeListener(this._onChange)
    },

    render() {

        // Construction du plateau de jeu
        let children = []
        let plateauTaille = BoardStore.getPlateauTaille() 
        let cases = [] = BoardStore.getCases() 

        for (let x = 0; x < plateauTaille; x++) {
            let rowChildren = []
            for (let y = 0; y < plateauTaille; y++) {
                rowChildren.push(<Case x={x} y={y} maCase={cases[x][y]} />)
            }
            children[x] = <Colonne>{rowChildren}</Colonne>
        }

        return (
            <div className="ticTacToe">
                {children}
            </div>
        );
    }

});

module.exports = App;
