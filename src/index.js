import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();