import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
  constructor(props) {
    super(props);
    

    
  }
  render() { 
    return (
     <header>
      <div className='button-container'>
       <nav className='navbar'>
        <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/about'>About</Link></li>
         <li><Link to='/media'>Media</Link></li>
         <li><Link to='/blog'>Blog</Link></li>
         <li><Link to='/pastarticles'>Past Articles</Link></li>
         <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
     </div>


    </header>
    )
}
}
export default Header
