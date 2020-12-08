import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function JobCard({job, handleJob}) {
  return (
      <div className="job-card" onClick={() => handleJob(job)}>
        <div className='title-and-company'>
          <span className='job-title'>{job.title}</span>
          <span className='job-company-name'>{job.company.name}</span>
        </div>
        <div className='location'>
          <span className='job-location'>{job.location}</span>
        </div>
      </div>
  )
}

export default JobCard
