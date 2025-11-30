import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Background from '../Components/Background';
import { experience } from '../data';

const ExperienceDetail = () => {
  const { id } = useParams();
  const job = experience.find((e) => e.id === id);

  if (!job) return <div className="container">Experience not found</div>;

  return (
    <>
      <Background />
      <div className="detail-container container">
        <Link to="/" className="back-link"><i className="fas fa-arrow-left"></i> Back to Home</Link>
        
        <header className="detail-header">
          <h1>{job.role}</h1>
          <h2 style={{color: 'var(--accent)', fontFamily: 'monospace', fontSize: '1.5rem'}}>{job.company}</h2>
          <p className="period" style={{marginTop: '10px', fontSize: '1.1rem'}}>{job.period}</p>
        </header>

        <div className="detail-grid">
          
          {/* Summary Bubble */}
          <div className="detail-card full-width">
            <h3><i className="fas fa-briefcase"></i> Role Overview</h3>
            <p>{job.overview}</p>
          </div>

          {/* Responsibilities Bubble */}
          <div className="detail-card full-width">
            <h3><i className="fas fa-tasks"></i> Key Responsibilities</h3>
            <ul className="feature-list">
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>

          {/* Impact Bubble */}
          <div className="detail-card full-width" style={{borderLeft: "4px solid var(--accent)"}}>
            <h3><i className="fas fa-trophy"></i> Impact & Achievements</h3>
            <p>{job.impact}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceDetail;