import React from 'react';
import {
    ComposedChart ,
    XAxis,
    YAxis,
    CartesianGrid ,
    Area ,
    Bar ,
    Line,
    Legend ,
    Tooltip,  
  } from 'recharts'
  
  import { useContext } from "react";
import { JobContex } from '../Home/Home';

  const data = [
    {
      name: 'Assignment-1',
      mark: 60,
      pv: 60,
      fill: '#8884d8',
    },
    {
      name: 'Assignment-2',
      mark: 53,
      pv: 50,
      fill: '#83a6ed',
    },
    {
      name: 'Assignment-3',
      mark: 60,
      pv: 60,
      fill: '#8dd1e1',
    },
    {
      name: 'Assignment-4',
      mark: 55,
      pv: 50,
      fill: '#82ca9d',
    },
    {
      name: 'Assignment-5',
      mark: 51,
      pv: 50,
      fill: '#82ca9d',
    },
    {
      name: 'Assignment-6',
      mark: 58,
      pv: 50,
      fill: '#82ca9d',
    },
    {
      name: 'Assignment-7',
      mark: 60,
      pv: 60,
      fill: '#82ca9d',
    },
    {
      name: 'Assignment-8',
      mark: 60,
      pv: 60,
      fill: '#82ca9d',
    },
  ]



const Statistics = () => {
  const jobs = useContext(JobContex)


    return (
        <div className='mt-9 flex justify-center'>
            <ComposedChart className='w-3/4' width={700} height={250} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="mark" stroke="#ff7300" />
</ComposedChart>
        </div>
    );
};

export default Statistics;