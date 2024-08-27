import React, { useState } from 'react';
import GameList from './components/GameList';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';  // Asegúrate de que App.css esté importado

const games = [
  { title: 'Game 1', description: 'This is an awesome game!', imgSrc: '/images/game1.jpg' },
  { title: 'Game 2', description: 'This game is even better!', imgSrc: '/images/game2.jpg' },
];

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Videojuegos Populares</h1>
      <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
      <GameList games={games} />
    </div>
  );
};

export default App;
