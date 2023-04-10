import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';

const Root = () => {
    return (
        <>
        <div>
            <Header></Header>
        </div>
        <Outlet></Outlet>
        </>
    );
};

export default Root;