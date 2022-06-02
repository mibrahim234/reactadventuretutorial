import React, {useState} from 'react'
import {Link } from 'react-router-dom'
function Navbar() {

  const {click, setClick} = useState(false); 
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
        </div>
    </nav>
    </>
  );
}

export default Navbar;