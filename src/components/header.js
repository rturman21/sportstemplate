import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../views/home';
import About from '../views/about';



class Header extends React.Component {
  render() {
    return (
     <header>

       <ul>
        <li><Link to='/'>Home</Link><Router/>
          </li> 
          <li><Link to='/about'>About</Link>
          </li>
        
      </ul> 

       </header>
    )
  }

}

export default Header;