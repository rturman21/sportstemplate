import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
      <footer>This is the Footer
        <ul>
         <li><Link to='/contact'>Contact</Link></li>
         <li><Link to='/about'>Privacy Policy</Link></li>
         <li><Link to='/media'>Terms of Use</Link></li>
         </ul>
          </footer>
       </div>
      </div>
  )
  }



export default Footer;