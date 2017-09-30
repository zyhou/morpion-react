import React from 'react';

import MainMenu from './mainMenu';
import Board from './board';

class App extends React.Component {
    state = {
        squares: Array(9).fill(null),
    };

    render() {
        return (
            <div className="game">
                <div className="game-info">
                    <MainMenu />
                </div>
                <div className="game-board">
                    <Board squares={this.state.squares} />
                </div>
            </div>
        );
    }
}

export default App;
