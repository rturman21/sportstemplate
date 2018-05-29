import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    open: false,
    active: false
  }
  this.toggle = this.toggle.bind(this);
};
 
  toggle(e) {
      this.setState(prevState => ({
        open: !prevState.open,
        active: !prevState.active
      }));
		}
	



  render() { 
    let activeClass = ['button-container'];
    if(this.state.active){
      activeClass.push('active');
    }
    let boxClass = ['overlay'];
    if(this.state.open){
      boxClass.push('open');
    }
      

    return (
      <nav className="header-wrapper">
    <div className="wide">
      <div className='logo'>Julia Kate</div>
        <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/about'>About</Link></li>
         <li><Link to='/media'>Media</Link></li>
         <li><Link to='/blog'>Blog</Link></li>
         <li><Link to='/pastarticles'>Past Articles</Link></li>
         <li><Link to='/contact'>Contact</Link></li>
        </ul>
  </div>
  <div className="mobile-wrapper">
  <div className="button-container" className={activeClass.join(' ')} onClick={this.toggle} id="toggle"><span className="top"></span><span className="middle"></span><span className="bottom"></span></div>
    <div className="overlay" onClick={this.toggle} className={boxClass.join(' ')}  id="overlay">
      <nav className="overlay-menu">
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
    </div>
  
</nav>
    )
}
}
export default Header
