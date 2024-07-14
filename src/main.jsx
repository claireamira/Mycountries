import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Mycard from './Components/MyCard.jsx';
import ContinentPage from './Components/ContinentPage.jsx';
import CountrySearch from './Components/Countrysearch.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Page Not Found</div>
  },{
    path: '/Mycard',
    element:<Mycard/>
  },{
    path:'/continent/:continent',
    element: <ContinentPage/> 
  },{
    path: '/search/:query',
    element: <CountrySearch/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
