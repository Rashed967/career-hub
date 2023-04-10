import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faDollar } from '@fortawesome/free-solid-svg-icons'

const Job = ({job}) => {
    const {
        company_logo, 
        job_title, 
        company_name, 
        remote_or_onsite,
        location,
        fulltime_or_parttime, 
        salary, 
        experiences, 

    } = job
    return (
        <div>
            <div className="card card-compact my-3 bg-base-100 shadow-md text-left border">
  <figure className='w-16'><img src={company_logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className='flex gap-5'>
        <p className='text-blue-600 font-semibold text-center py-2 px-3 border border-blue-600 rounded-sm'>{remote_or_onsite}</p>
        <p className='text-blue-600 font-semibold text-center py-2 px-3 border border-blue-600 rounded-sm'>{fulltime_or_parttime}</p>
    </div>
    <div className='flex items-center gap-4'>
    <span><FontAwesomeIcon icon={faLocation} /> {location}</span>
    <span><FontAwesomeIcon icon={faDollar} /> Salary : {salary}</span>
    </div>
    <div className="card-actions justify-end">
    <button className='rounded-md text-white font-semibold py-3 px-4 bg-[#7E90FE]'>View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;