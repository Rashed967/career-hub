import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Jobs from '../Jobs/Jobs';


const Home = () => {
    const categories = useLoaderData()
    const [jobs, setJobs ] = useState([])
    
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    const [allJob, setJob] = useState([])
    const getJobDetial = job =>{
        setJob(job)
    }
    

    return (
        <div>
            <Banner></Banner>
            <Categories
            categories={categories}
            ></Categories>
            <Jobs
            jobs={jobs}
            getJobDetial={getJobDetial}
            ></Jobs>
        </div>
    );
};

export default Home;