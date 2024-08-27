import React from 'react';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Cambiar a {theme === 'light' ? 'Modo Nocturno' : 'Modo Día'}
    </button>
  );
};

export default ThemeSwitcher;
