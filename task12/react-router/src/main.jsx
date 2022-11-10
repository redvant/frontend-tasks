import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Welcome from './pages/welcome/Welcome'
import Dashboard from './pages/dashboard/Dashboard'
import Error from './pages/error/Error'
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Notifications from './pages/notifications/Notifications'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <Error />
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "notifications",
        element: <Notifications />
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
