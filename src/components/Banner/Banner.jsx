import React from 'react';
import image from './man.png'
const Banner = () => {
    return (
        <div className='md:flex justify-between'>
            <div className="banner-description text-left md:w-2/3 my-6 space-y-7">
                <h1 className=' font-bold text-4xl'><span className='text-[#1A1919] '>One Step</span> <br /> <span className='text-[#1A1919]'>Closer To Your</span> <br /> <span className='text-[#7E90FE]'>Dream Job</span></h1>
                <p className='md:w-3/5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='rounded-md text-white font-semibold py-3 px-4 bg-[#7E90FE]'>Star Applying</button>
            </div>
            <div className="banner-img ">
                <img className='w-6/6' src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;