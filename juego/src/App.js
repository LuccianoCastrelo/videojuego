import React from 'react';
import GameList from './components/GameList';

const games = [
  { title: 'Game 1', description: 'This is an awesome game!', imgSrc: '/images/game1.jpg' },
  { title: 'Game 2', description: 'This game is even better!', imgSrc: '/images/game2.jpg' },
];

const App = () => {
  return (
    <div className="App">
      <h1>Videojuegos Populares</h1>
      <GameList games={games} />
    </div>
  );
};

export default App;
