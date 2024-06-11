import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Reserve from './Components/Reserve/Reserve';
import Booked from './Components/Booked/Booked';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route, Router } from 'react-router-dom';
import Stilltomake from './Components/StillToMake/Stilltomake';



const router =createBrowserRouter([ //linking all separate pages of the application together.
//Below are connections to the reservation page, confirmation page and under construction page.
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "reserve",
    element: <Reserve/>
  },
  {
    path: "booked",
    element: <Booked/>
  },
  {
    path: 'under-construction',
    element: <Stilltomake/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
