import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/index.css';
// import Header from './components/header';
import Main from './views/main';
// import Footer from './components/footer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">

          <Main />

      </div>
    );
  }
}

export default App;
