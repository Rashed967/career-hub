import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetail from '../JobDetail/JobDetail';

const JobDetails = () => {
  

  const jobId = useParams()

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('/jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  }, [])

  const newJob = [];
  jobs.find(job => job.id ===  Number(jobId.jobId) && newJob.push(job))
 

    return (
        <div className='flex mt-24 gap-5'>
            {
              newJob.map(j => <JobDetail
              key={j.id}
              j={j}
              ></JobDetail>)
            }
        </div>
    );
};

export default JobDetails;










// import React, { useEffect, useState, useContext } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import { JobContex } from '../Home/Home';
// import JobDetail from '../JobDetail/JobDetail';
// import Header from '../Header/Header';

// const JobDetails = () => {
  
//   const jobId = useParams()

//   const { jobs } = useContext(JobContex)

//   const [newJob, setNewJob] = useState([]);

//   useEffect(() => {
//     const job = jobs.find(job => job.id ===  Number(jobId.jobId))
//     if (job) {
//       setNewJob([job])
//     }
//   }, [jobId, jobs])

//   return (
//     <div className='flex mt-24 gap-5'>
//       {
//         newJob.length > 0 ? 
//         newJob.map(j => <JobDetail key={j.id} j={j} />)
//         :
//         <p>No job found</p>
//       }
//     </div>
//   );
// };

// export default JobDetails;
