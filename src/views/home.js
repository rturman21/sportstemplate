import React from 'react';
import {Animated} from "react-animated-css";
import { Link } from 'react-router-dom';


const Home = () => (
  
     <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <div id='content-container'>
        <h1>JuliaKate Culpepper</h1>
          <br/>
           <span>Let's Work Together</span>
           <Link to='/contact'><button className='contact-btn'>Contact</button></Link>
      </div>
      </Animated>

)

export default Home
