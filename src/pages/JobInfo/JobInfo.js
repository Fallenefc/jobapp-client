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
            <h3 className="company">Job Description</h3>
            <h4 className="job-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida pellentesque nisl, ut gravida neque cursus a. Phasellus fermentum eu nulla sit amet malesuada. Suspendisse et ipsum a felis auctor viverra non et diam. Sed elementum dui viverra metus porttitor, quis tempor augue lacinia. Nunc vehicula, nibh sit amet ultricies euismod, tortor velit venenatis mi, in viverra lorem elit tincidunt est. In nec augue erat. Nullam eget mi non dui vehicula dictum. Pellentesque scelerisque, ante nec iaculis luctus, purus nibh cursus magna, id porta ligula nulla in diam. Curabitur maximus diam id tellus mattis volutpat.</h4>
      </div>
    </div>
  )
}

export default JobInfo
