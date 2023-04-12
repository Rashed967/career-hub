import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './components/Layout/Root/Root';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/categories.json'),
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
      {
        path: 'job-details/:jobId',
        element: <JobDetails />,
      },
      {
        path: 'blog',
        element: <Blog />,
        loader: () => fetch('/blog.json'),
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  </React.StrictMode>
);
