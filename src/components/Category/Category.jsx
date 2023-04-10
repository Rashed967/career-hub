import React from 'react';

const Category = ({category}) => {
    const {logo, name, jobs_available, id} = category; 
    return (
        <div className='text-left bg-cyan-100 space-y-2 p-5 rounded-md '>
           <img className='w-14 mb-4' src={logo} alt="" />
           <h3 className='font-bold text-1xl'>{name}</h3>
           <p>{jobs_available} jobs available</p>
        </div>
    );
};

export default Category;