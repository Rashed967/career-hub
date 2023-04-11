import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../utils/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    
    const getStoredCart = getShoppingCart()
   
    const [jobs, setJobs] = useState([])
    // const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(() => {
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
      }, [])
      
      let appliedJobs = []
      for(const id in getStoredCart){  
        jobs.filter(job => job.id === getStoredCart[id] && appliedJobs.push(job) )
  
      }

    const filterByRemote = () =>{
        const filtering = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
        appliedJobs = filtering
        console.log(appliedJobs)    
    }  

    const filterByFullTime = () =>{
        const filtering = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
        appliedJobs = filtering
        console.log(appliedJobs)    
    }  

    return (
        <div>
            <div className='bg-emerald-500 py-14 rounded-sm'>
                    <h3 className='text-3xl font-semibold'>Applied Job</h3>
            </div>
            <div className='flex mt-11 flex-row-reverse gap-x-4'>
                <button onClick={() => filterByRemote('Part-Time')} className='btn btn-primary '>Filter By Remote</button>
                <button onClick={() => filterByFullTime('Full-time')} className='btn btn-primary '>Filter By on-site</button>
            </div>
            {
                appliedJobs.map((job, index) => <AppliedJob
                key={job.id}
                job={job}
                ></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;