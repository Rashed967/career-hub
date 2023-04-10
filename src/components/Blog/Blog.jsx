import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Blog = () => {
    const blogs = useLoaderData()

    return (
        <div className='mt-10'>
           {
            blogs.map(post => <Post
            key={post.id}
            post={post}
            ></Post>)
           }
        </div>
    );
};

export default Blog;