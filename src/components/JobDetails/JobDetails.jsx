import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetail from '../JobDetail/JobDetail';
import { JobContex } from '../Home/Home';
import jobs from '../../../public/jobs.json'


const JobDetails = () => {
    const [job, setJob] = useState(null);
  const { id } = useParams();
console.log(id)

  useEffect(() => {
    const job = jobs.find(job => job.id === Number(id));
    setJob(job);
    console.log(job)
  }, [id]);


    return (
        <div>
            <h3>helloe from job details</h3>
            <JobDetail></JobDetail>
        </div>
    );
};

export default JobDetails;