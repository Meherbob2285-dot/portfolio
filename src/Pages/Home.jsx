import React from 'react';
import Background from '../Components/Background';
import { skills, projects, experience, contactInfo } from '../data';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <Background />

      {/* Navbar & Background passed from App.jsx usually, but here we assume context or direct render */}
      {/* Note: In your App.jsx you render Navbar outside Routes, so you don't need it here. 
          If you are rendering Navbar inside App.jsx, remove it from here. 
          Below assumes you removed it from App.jsx or are handling it per page. 
          For safety, I'll assume App.jsx handles it.*/}
      
      <header id="hero">
        <div className="hero-content">
          <p className="hero-intro">Hi, my name is</p>
          <h1>Meher Bob.</h1>
          <h2 className="hero-subtitle">I build intelligent digital experiences.</h2>
          <p className="hero-desc">
            Computer Science Student at SUTD specializing in AI & Data Analytics. 
            I bridge the gap between complex backend logic and intuitive frontend design.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="/Bob_Meher_Resume.pdf" target="_blank" className="btn-secondary">
              Resume <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="container full-width-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-layout">
          <div className="about-narrative">
            <p>
              I am a third-year undergraduate specializing in <strong>Artificial Intelligence and Data Analytics</strong>. 
              My academic journey is defined by a curiosity for how data shapes user experiences. 
              I thrive in environments that challenge me to integrate rigorous research—like my work on 
              AI code detection—with practical, full-stack application development.
            </p>
            <p>
              Currently, I am looking for internship opportunities where I can apply my skills in 
              software engineering and data analysis to solve real-world problems.
            </p>
          </div>
          
          <div className="education-bubbles">
            <div className="detail-card">
              <span className="period">2023 - 2027</span>
              <h4>SUTD</h4>
              <p>B.Eng Computer Science & Design</p>
              <div className="tech-pill">Undergraduate Merit Scholar</div>
              <div className="tech-pill">CGPA: 3.4/5.0</div>
            </div>
            <div className="detail-card">
              <span className="period">2021 - 2023</span>
              <h4>Global Indian International School</h4>
              <p>IB Diploma Programme</p>
              <div className="tech-pill">Global Citizen Scholar</div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="container full-width-section">
        <h2 className="section-title">Where I've Worked</h2>
        <div className="experience-grid">
          {experience.map((job) => (
            <Link to={`/experience/${job.id}`} key={job.id} className="card-link">
              <div className="detail-card">
                <h3>{job.company}</h3>
                <h4 style={{color: 'var(--text-secondary)'}}>{job.role}</h4>
                <p className="period">{job.period}</p>
                <p className="summary">{job.summary}</p>
                <span style={{color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem'}}>Read Details <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="projects" className="container full-width-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-item-link">
              <div className="detail-card">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h3>{project.title}</h3>
                    <i className="fas fa-external-link-alt" style={{color:'var(--accent)'}}></i>
                </div>
                <p style={{marginBottom: '15px'}}>{project.subtitle}</p>
                <div className="tech-mini">
                  {project.tech.slice(0,4).map((t,i) => <span key={i} className="tech-pill">{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="skills" className="container full-width-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid-visual">
          {skills.map((skill, index) => (
            <div key={index} className="detail-card skill-card-visual" style={{borderTop: `3px solid ${skill.color}`}}>
              <div className="icon-box" style={{color: skill.color}}>
                <i className={`fas ${skill.icon}`}></i>
              </div>
              <h3>{skill.category}</h3>
              <div className="tags">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="tech-pill" style={{borderColor: skill.color, color: skill.color, background: 'transparent'}}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <h2>Let's Connect</h2>
        <div className="contact-details">
            <a href={`mailto:${contactInfo.email}`}><i className="fas fa-envelope"></i> {contactInfo.email}</a>
            <a href={`tel:${contactInfo.phone}`}><i className="fas fa-phone"></i> {contactInfo.phone}</a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>
        <p style={{marginTop: '30px', fontSize: '0.9rem'}}>&copy; 2025 Meher Bob.</p>
      </footer>
    </>
  );
};

export default Home;