import React from 'react';
import Category from '../Category/Category';

const Categories = ({categories}) => {
    return (
        <>
            <h1 className='mt-10 text-3xl font-bold my-5'>Job Category List</h1>
            <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='my-8 grid lg:grid-cols-4 gap-5'>
            {
                categories.map(category => <Category
                key={category.id}
                category={category}
                ></Category>)
            }

        </div>
        </>
    );
};

export default Categories;