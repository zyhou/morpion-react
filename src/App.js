import React, { useState } from 'react';
import { MainMenu } from './MainMenu';
import { Board } from './Board';
import { getInitBoard, addMove } from './game';

const GameContext = React.createContext({
  player: '',
  message: '',
  board: [],
  onClick: () => true,
});

export const GameConsumer = GameContext.Consumer;
const GameProvider = GameContext.Provider;

export const App = () => {
  const [game, setGame] = useState({
    message: 'Morpion React',
    board: getInitBoard(),
    player: 'X',
  });

  const onClickSquare = index => {
    const moveData = addMove(game.board, game.player, index);
    if (moveData) {
      setGame({ ...moveData });
    }
  };

  return (
    <GameProvider
      value={{
        ...game,
        onClick: onClickSquare,
      }}
    >
      <div className="game">
        <div className="game-info">
          <MainMenu />
        </div>
        <div className="game-board">
          <Board squares={game.board} />
        </div>
      </div>
    </GameProvider>
  );
};
