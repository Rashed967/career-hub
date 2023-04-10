import React from 'react';
import Job from '../Job/Job';

const Jobs = ({jobs}) => {

    return (
        <>
        <h1 className='mt-20 mb-6 text-3xl font-bold my-5'>Featured Jobs</h1>
            <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid md:grid-cols-2 gap-6'>
            {
                jobs.map(job => <Job
                key={job.id}
                job={job}
                ></Job>)
            }
        </div>
        </>
    );
};

export default Jobs;