// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/" className="logo">MB.</Link>
      <ul className="nav-links">
        {/* If on Home, scroll to ID. If not, go to Home then scroll. */}
        <li><a href={isHome ? "#about" : "/#about"}>About</a></li>
        <li><a href={isHome ? "#experience" : "/#experience"}>Experience</a></li>
        <li><a href={isHome ? "#projects" : "/#projects"}>Projects</a></li>
        <li><a href={isHome ? "#skills" : "/#skills"}>Skills</a></li>
        
        {/* Theme Toggle Button */}
        <li>
          <button onClick={toggleTheme} className="theme-btn">
            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </li>
        
        <li><a href="#contact" className="btn-primary">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;