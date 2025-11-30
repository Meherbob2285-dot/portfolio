import React from 'react';
import Navbar from '../Components/Navbar';
import { experience } from '../data';

const Experience = () => {
  return (
    <>
      <Navbar />
      <div className="container experience-page">
        <h1 className="section-title">Work Experience</h1>
        <div className="timeline-extended">
          {experience.map((job) => (
            <div key={job.id} className="timeline-card">
              <div className="timeline-header">
                <h2>{job.role}</h2>
                <span className="company-name">{job.company}</span>
                <span className="period">{job.period}</span>
              </div>
              <p className="job-desc">{job.description}</p>
              <ul className="job-details">
                {job.details.map((detail, i) => (
                  <li key={i}><i className="fas fa-check-circle"></i> {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;