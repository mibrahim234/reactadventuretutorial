import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // removes button and shows depending on screen size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // allows it to render one time and then doesnt show up anymore
  // used for signup button to hide when resizing 
  useEffect(() => {
    showButton();
  }, []);

  // invoking function, resize get show button to work for me
  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
  {/* Link replaces a tag, className replaces class */}
    <Link to="/" className="navbar-logo">
        TRVL <i className="fab fa-typo3" />
    </Link>
    <div className="menu-icon">
      {/* if clicked change icon */}
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'> 
      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Home
      </Link>
      </li>
      <li className='nav-item'> 
      <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
        Services
      </Link>
      </li>
      <li className='nav-item'> 
      <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
        Products 
      </Link>
      </li>
      <li className='nav-item'> 
      <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
        Sign Up
      </Link>
      </li>
    </ul>
    {/* If button is true return it */}
    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;