import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
