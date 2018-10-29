import React from 'react';
import { MainMenu } from './MainMenu';
import { Board } from './Board';
import { getInitBoard } from './game';

const GameContext = React.createContext({
  message: '',
  squares: [],
});

export const GameConsumer = GameContext.Consumer;
const GameProvider = GameContext.Provider;

export class App extends React.Component {
  state = {
    message: 'Morpion React',
    squares: getInitBoard(),
  };

  render() {
    const { message, squares } = this.state;
    return (
      <GameProvider
        value={{
          message,
          squares,
        }}
      >
        <div className="game">
          <div className="game-info">
            <MainMenu />
          </div>
          <div className="game-board">
            <Board squares={squares} />
          </div>
        </div>
      </GameProvider>
    );
  }
}
