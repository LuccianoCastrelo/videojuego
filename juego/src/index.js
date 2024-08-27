import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Importa los estilos globales
import './App.css';    // Importa App.css para aplicar los estilos
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
