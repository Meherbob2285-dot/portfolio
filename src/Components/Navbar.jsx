import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      {/* Scroll to top when clicking Logo */}
      <HashLink smooth to="/#hero" className="logo">MB.</HashLink>
      
      <ul className="nav-links">
        {/* HashLink handles the "Go to Home THEN Scroll" logic automatically */}
        <li><HashLink smooth to="/#about">About</HashLink></li>
        <li><HashLink smooth to="/#experience">Experience</HashLink></li>
        <li><HashLink smooth to="/#projects">Projects</HashLink></li>
        <li><HashLink smooth to="/#skills">Skills</HashLink></li>
        
        {/* Theme Toggle */}
        <li>
          <button onClick={toggleTheme} className="theme-btn">
            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </li>
        
        {/* Contact Link */}
        <li><HashLink smooth to="/#contact" className="btn-primary">Contact</HashLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;