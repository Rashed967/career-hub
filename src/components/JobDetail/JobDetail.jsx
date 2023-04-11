import React from 'react';

const JobDetail = ({j}) => {
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

    } = j
    console.log(j)
    return (
        <>
            <div>
                <p><span className='font-semibold'>job_description :</span>{job_description}</p>
                <p><span className='font-semibold'>Job Responsibility :</span>{job_responsibility}</p>
                <h3 className='font-semibold'>Educational Requirements:</h3>
                <p>{educational_requirements}</p>
                <h3 className='font-semibold'>Experiences:</h3>
                <p>{experiences}</p>
            </div>
            <div></div>
        </>
    );
};

export default JobDetail;