import React from 'react';
import api from '../../services/api';
import './styles.css';
import { useEffect, useState } from 'react';


export default function Dashboard() {
  
  const [ jobs, setJobs] = useState(null);

  async function apiDisplayJobs() {

    const response = await api.get('/job');
    console.log(response);
  
    return response.data
  }

  useEffect(() => {
    apiDisplayJobs().then(res => setJobs(res))
  }, []);



  return (
    <div>
      {jobs ? jobs.map(job => job.title) : <div> Loading </div>}
    </div>
  )
}
