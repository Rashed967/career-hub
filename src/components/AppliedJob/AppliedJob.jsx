import { faDollar, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJob = ({job}) => {
    
    const {
        company_logo, 
        job_title, 
        company_name, 
        remote_or_onsite,
        location,
        fulltime_or_parttime, 
        salary, 
        experiences,
        id,

    } = job
    return (
        <>
            <div className=" p-5 card-compact my-3 bg-base-100 shadow-md text-left border flex items-center rounded-md">
  <figure className='w-24 mx-5'><img src={company_logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className='inline-flex gap-5 w-1/4'>
        <p className='text-blue-600 font-semibold text-center py-2 px-3 border border-blue-600 rounded-sm'>{remote_or_onsite}</p>
        <p className='text-blue-600 font-semibold text-center py-2 px-3 border border-blue-600 rounded-sm'>{fulltime_or_parttime}</p>
    </div>
    <div className='flex items-center gap-4'>
    <span><FontAwesomeIcon icon={faLocation} /> {location}</span>
    <span><FontAwesomeIcon icon={faDollar} /> Salary : {salary}</span>
    </div>
  </div>

    <Link  to={`/job-details/${id}`}>
    <button  className='rounded-md text-white font-semibold py-3 px-4 bg-[#7E90FE]'>View Details</button>
    </Link>

</div>
        </>
    );
};

export default AppliedJob;