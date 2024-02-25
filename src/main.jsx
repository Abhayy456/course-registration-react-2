import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import  App  from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddSubject } from '../pages/AddSubject.jsx'
// import { Courses } from "../pages/Courses.jsx"
import { router } from '../routerConfig.jsx'

// const router = createBrowserRouter([
//   // {
//   //   path: '/',
//   //   element: <App />,
//   // },
//   // {
//   //   path: '/AddSubject',
//   //   element: <AddSubject />
//   // },
//   // {
//   //   path: '/Courses',
//   //   element: <Courses />
//   // }
// ]);
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )