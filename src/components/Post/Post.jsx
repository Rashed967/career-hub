import React from 'react';

const Post = ({post}) => {
    const {title, description} = post
    return (
        <div className='p-8 border rounded-md my-5'>
            <h3 className='text-2xl font-semibold my-4'>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Post;