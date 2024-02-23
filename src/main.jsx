import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddSubject } from '../pages/AddSubject.jsx'
import { Courses } from "../pages/Courses.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/AddSubject',
    element: <AddSubject />
  },
  {
    path: 'Courses',
    element: <Courses />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)