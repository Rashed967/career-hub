import React from 'react';
import { getShoppingCart } from '../../../utils/fakedb';

const AppliedJobs = () => {
    const getStoredCart = getShoppingCart()
    console.log(getStoredCart)
    return (
        <div>
            <h2>Hello from applied jobs</h2>
        </div>
    );
};

export default AppliedJobs;