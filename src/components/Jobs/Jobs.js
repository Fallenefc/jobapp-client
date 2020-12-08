import React from 'react';
import JobCard from '../../components/JobCard/JobCard';
import { v4 as uuidv4 } from 'uuid';

function Jobs({jobs, handleJob}) {
  return (
    <div className="job-card-container">
      {jobs
      ? jobs.map(job => <React.Fragment key={uuidv4()}><JobCard job={job} handleJob={handleJob}/></React.Fragment>)
      : <div className="loading-text"> Loading </div>}
    </div>
  )
}

export default Jobs
