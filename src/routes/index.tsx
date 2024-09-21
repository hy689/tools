import Attend from '../pages/Mobile/Attend';
import Auth from '../pages/Mobile/Auth';
import React from 'react'

import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/attend",
    element: <Attend />,
  },
],{
  basename: '/reactApp',
});