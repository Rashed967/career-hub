import React, { createContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Jobs from '../Jobs/Jobs';

export const JobContex = createContext('')

const Home = () => {
    const categories = useLoaderData()
   
    
    const [jobs, setJobs ] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[jobs])

    const showAllJob = data =>{
        setShowAll(true)
    }



    return (
       <JobContex.Provider value="Hello, how are you">
         <div>
            <Banner></Banner>
            <Categories
            categories={categories}
            ></Categories>
            <Jobs
            jobs={jobs.slice(0, showAll ? 6 : 4)}
            showAllJob={showAllJob}
            ></Jobs>
        </div>
       </JobContex.Provider>
    );
};

export default Home;