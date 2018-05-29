import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className="footer">This is the Footer
        <ul>
         <li><Link to='/contact'>Contact</Link></li>
         <li><Link to='/about'>Privacy Policy</Link></li>
         <li><Link to='/home'>Terms of Use</Link></li>
         </ul>
          </footer>
     
  )
  }



export default Footer;