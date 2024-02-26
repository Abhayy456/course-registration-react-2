import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import  App  from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddSubject } from '../pages/AddSubject.jsx'
// import { Courses } from "../pages/Courses.jsx"
import { router } from '../routerConfig.jsx'
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);