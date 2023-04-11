import React from 'react';
import Job from '../Job/Job';

const Jobs = ({jobs, showAllJob}) => {

    return (
        <>
        <h1 className='mt-20 mb-6 text-3xl font-bold my-5'>Featured Jobs</h1>
            <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid md:grid-cols-2 gap-6 my-7'>
            {
                jobs.map(job => <Job
                key={job.id}
                job={job}
                ></Job>)
            }
        </div>
            <button onClick={() => showAllJob(true)} className='rounded-md text-white font-semibold py-3 px-4 bg-[#7E90FE]'>See All Jobs</button>
        </>
    );
};

export default Jobs;