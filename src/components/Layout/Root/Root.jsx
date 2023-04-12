import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';
import './Root.css'

const Root = () => {
    return (
        <>
        <div className='container md:mx-auto'>
        <div>
            <Header></Header>
        </div>
        <Outlet></Outlet>
        </div>
        </>
    );
};

export default Root;