import React from 'react';
import './styles.css';

function JobInfo({job, handleBack}) {
  return (
    <div className="jobinfo-container">
        <button onClick={handleBack}>Back</button>
        <span className="jobinfo-title">{job.title}</span>
      <div className="jobinfo">
              <h3 className="company">Job Info</h3>
            <div className="small-container">
              <span className="description">Title:</span><span className="jobinfo-text">{job.title}</span>
            </div>
            <div className="small-container">
              <span className="description">Level:</span><span className="jobinfo-text">{job.level}</span>
            </div>
            <div className="small-container">
              <span className="description">Wage:</span><span className="jobinfo-text">{job.wage}</span>
            </div>
            <div className="small-container">
              <span className="description">Tags:</span><span className="jobinfo-text">{job.tags}</span>
            </div>
              <h3 className="company">Company Info</h3>
            <div className="small-container">
              <span className="description">Company:</span><span className="jobinfo-text">{job.company.name}</span>
            </div>
            <div className="small-container">
              <span className="description">Contact:</span><span className="jobinfo-text">{job.company.contactName}</span>
            </div>
            <div className="small-container">
              <span className="description">Number:</span><span className="jobinfo-text">{job.company.contactNumber}</span>
            </div>
            <div className="small-container">
              <span className="description">Email:</span><span className="jobinfo-text">{job.company.email}</span>
            </div>
      </div>
    </div>
  )
}

export default JobInfo
