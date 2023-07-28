// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DarkModeProvider from './context/DarkModeContext';
// import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
