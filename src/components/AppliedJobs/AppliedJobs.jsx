import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../utils/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    
    const getStoredCart = getShoppingCart()
   
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
      }, [])
      
    const appliedJobs = []
      for(const id in getStoredCart){  
        jobs.filter(job => job.id === getStoredCart[id] && appliedJobs.push(job))  
      }

    return (
        <div>
            <div className='bg-emerald-500 py-14 rounded-sm'>
                    <h3 className='text-3xl font-semibold'>Applied Job</h3>
            </div>
            {
                appliedJobs.map(job => <AppliedJob
                key={job.id}
                job={job}
                ></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;