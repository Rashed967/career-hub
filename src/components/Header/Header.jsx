import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between mb-4 items-center '>
            <h2 className='font-bold text-2xl'><Link to="/">Job Search</Link></h2>
            <nav className='space-x-6 text-[#757575] font-semibold'>
                <Link to="home">Home</Link>
                <Link to="statistics">Statistics</Link>
                <Link to="applied-jobs">Applied Jobs</Link>
                <Link to="Blog">Blog</Link>
             </nav>
             <button className='rounded-md text-white font-semibold py-3 px-4 bg-[#7E90FE]'>Star Applying</button>
        </div>
    );
};

export default Header;