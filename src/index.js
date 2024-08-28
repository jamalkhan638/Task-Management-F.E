import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <BrowserRouter basename="/">
     <ToastContainer autoClose={1000} pauseOnHover={false} />
<App />
  </BrowserRouter>
, document.getElementById('root'));

