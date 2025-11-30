import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Background from '../Components/Background';
import { projects } from '../data';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="container">Project not found</div>;

  return (
    <>
      <Background />
      <div className="detail-container container">
        <Link to="/" className="back-link"><i className="fas fa-arrow-left"></i> Back to Home</Link>
        
        <header className="detail-header">
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          
          {/* Tech Stack Centered at Top */}
          <div className="tech-full-list" style={{justifyContent: 'center'}}>
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-pill">{tech}</span>
            ))}
          </div>
        </header>

        {project.videoID && (
          <div className="video-wrapper">
            <iframe 
              src={`https://www.youtube.com/embed/${project.videoID}`} 
              title={project.title}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* The Grid Layout for Bubbles */}
        <div className="detail-grid">
            
            {/* Overview Bubble */}
            <div className="detail-card full-width">
                <h3><i className="fas fa-info-circle"></i> Overview</h3>
                <p>{project.overview}</p>
            </div>

            {/* Architecture Bubble */}
            <div className="detail-card">
                <h3><i className="fas fa-sitemap"></i> Architecture</h3>
                <p>{project.architecture}</p>
            </div>

            {/* Infrastructure Bubble */}
            <div className="detail-card">
                <h3><i className="fas fa-server"></i> Infrastructure</h3>
                <p>{project.infrastructure}</p>
            </div>

            {/* Key Features Bubble */}
            <div className="detail-card full-width">
                <h3><i className="fas fa-star"></i> Key Features</h3>
                <ul className="feature-list">
                    {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            </div>

            {/* Results Bubble */}
            <div className="detail-card full-width" style={{borderLeft: "4px solid var(--accent)"}}>
                <h3><i className="fas fa-chart-line"></i> Results & Impact</h3>
                <p>{project.results}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;