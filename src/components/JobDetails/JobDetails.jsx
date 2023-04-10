import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobDetail from '../JobDetail/JobDetail';

const JobDetails = () => {


    return (
        <div>
            <h3>helloe from job details</h3>
            <JobDetail></JobDetail>
        </div>
    );
};

export default JobDetails;