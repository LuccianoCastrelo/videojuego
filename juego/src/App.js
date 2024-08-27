import React, { useState } from 'react';
import GameList from './components/GameList';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';  

const games = [
  { title: 'Valorant', description: 'Shooter Riot', imgSrc: '/resources/imagen1.png' },
  { title: 'Counter-Strike 2', description: 'Shooter Valve!', imgSrc: '/resources/imagen2.png' },
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
