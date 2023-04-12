import React from 'react';
import { addToDb } from '../../../utils/fakedb';

const JobDetail = ({ j }) => {
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
        job_description,
        job_responsibility,
        educational_requirements,
        contact_information,

    } = j
    

    return (
        <>
            <div className='text-left space-y-4'>
                <p><span className='font-semibold'>job_description :</span>{job_description}</p>
                <p><span className='font-semibold'>Job Responsibility :</span>{job_responsibility}</p>
                <h3 className='font-semibold'>Educational Requirements:</h3>
                <p>{educational_requirements}</p>
                <h3 className='font-semibold'>Experiences:</h3>
                <p>{experiences}</p>
            </div>
            <div>
                <div className="card card-compact w-96 bg-red-200 shadow-md text-left ">
                    <h3 className='font-semibold border-b-2 pb-4 mb-4'>Job Details</h3>
                    <p ><span className='font-semibold'>Salary:</span > {salary} (Per Month)</p>
                    <p ><span className='font-semibold'>Job Title :</span > : {job_title} (Per Month)</p>

                    <div className="mt-5 text-left">
                        <h2 className="card-title border-b-2 pb-4 mb-4">Contact Information</h2>
                    <p ><span className='font-semibold'>Phone :</span > {contact_information.phone}</p>
                    <p ><span className='font-semibold'>Email :</span > {contact_information.email}</p>
                    <p ><span className='font-semibold'>location :</span > {location}</p>
                       
                    </div>
                </div>
                
                <button onClick={() => addToDb(id)} className="btn btn-success w-full mt-4">Apply Now</button>

            </div>
        </>
    );
};

export default JobDetail;