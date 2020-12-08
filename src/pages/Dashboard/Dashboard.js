import React from 'react';
import api from '../../services/api';
import './styles.css';
import { useEffect, useState } from 'react';
import Jobs from '../../components/Jobs/Jobs';
import JobInfo from '../JobInfo/JobInfo';

export default function Dashboard() {
  
  const [ jobs, setJobs] = useState(null);
  const [jobInfo, setJobInfo ] = useState(null);

  async function apiDisplayJobs() {

    const response = await api.get('/job');
    console.log(response);
  
    return response.data
  }

  useEffect(() => {
    apiDisplayJobs().then(res => setJobs(res))
  }, []);

  const handleJob = (job) => {
    setJobInfo(job);
    console.log('dog');
  };

  const handleBack = () => {
    setJobInfo(null);
  };

  return (
    <div className="dashboard-container">
      {jobInfo ? <JobInfo job={jobInfo} handleBack={handleBack}/> : <Jobs jobs={jobs} handleJob={handleJob}/>}
    </div>
  )
}
