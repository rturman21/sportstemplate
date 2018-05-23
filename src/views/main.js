import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import About from './about';


class Main extends React.Component {
  render() {
    return(
      <Router>

        <header>

<ul>
 <li><Link to='/'>Home</Link><Router/>
   </li> 
   <li><Link to='/about'>About</Link>
   </li>
 
</ul> 

</header>
      <div>
      <Route exact path = '/' component={Home}/> 
      <Route path = '/about' component={About}/>
      </div>
      </Router>

    )

  }
}

export default Main;