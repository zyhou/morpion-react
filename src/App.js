import React from 'react';
import { MainMenu } from './MainMenu';

const GameContext = React.createContext({
  message: '',
});

export const GameConsumer = GameContext.Consumer;
const GameProvider = GameContext.Provider;

export const App = () => (
  <GameProvider
    value={{
      message: 'oui',
    }}
  >
    <div className="game">
      <div className="game-info">
        <MainMenu />
      </div>
      <div className="game-board">Board</div>
    </div>
  </GameProvider>
);
