import React from 'react';
import { MainMenu } from './MainMenu';
import { Board } from './Board';
import { getInitBoard, addMove } from './game';

const GameContext = React.createContext({
  player: '',
  message: '',
  squares: [],
  onClick: () => true,
});

export const GameConsumer = GameContext.Consumer;
const GameProvider = GameContext.Provider;

export class App extends React.Component {
  state = {
    message: 'Morpion React',
    squares: getInitBoard(),
    player: 'X',
  };

  onClickSquare = index => {
    const { squares, player } = this.state;
    const moveData = addMove(squares, player, index);
    if (moveData) {
      this.setState({
        player: moveData.player,
        squares: moveData.board,
        message: moveData.message,
      });
    }
  };

  render() {
    const { message, squares } = this.state;
    return (
      <GameProvider
        value={{
          message,
          squares,
          onClick: this.onClickSquare,
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
