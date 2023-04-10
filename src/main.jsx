import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Layout/Root/Root';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
        loader : () => fetch('categories.json'),
      },
      {
        path : "statistics",
        element : <Statistics></Statistics>
      },
      {
        path : "job-details",
        element : <JobDetails></JobDetails>,
      },
      {
        path : "*",
        element : <ErrorPage></ErrorPage>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
