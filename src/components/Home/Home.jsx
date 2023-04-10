import React, { createContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Jobs from '../Jobs/Jobs';

export const JobContex = createContext('')

const Home = () => {
    const categories = useLoaderData()
   
    const [jobs, setJobs ] = useState([])
    
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data.slice(0, 4)))
    },[])

   
    

    return (
       <JobContex.Provider value="Hello, how are you">
         <div>
            <Banner></Banner>
            <Categories
            categories={categories}
            ></Categories>
            <Jobs
            jobs={jobs}
            showAll={showAll}
            ></Jobs>
        </div>
       </JobContex.Provider>
    );
};

export default Home;