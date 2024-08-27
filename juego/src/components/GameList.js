import React from 'react';
import GameCard from './GameCard';

const GameList = ({ games }) => {
  return (
    <div className="game-list">
      {games.map((game, index) => (
        <GameCard key={index} title={game.title} description={game.description} imgSrc={game.imgSrc} />
      ))}
    </div>
  );
};

export default GameList;