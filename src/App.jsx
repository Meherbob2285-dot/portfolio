// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import ProjectDetail from './Pages/ProjectDetail';
import ExperienceDetail from './Pages/ExperienceDetail';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import './Style.css';

function App() {
  // Theme State
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      {/* Navbar is HERE, passing the toggle function to it */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Background theme={theme} />
      
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;