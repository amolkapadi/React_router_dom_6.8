import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './Pages/Home/Home'

import RootLayout from './Routes/RootLayout'


const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
   
    ]
  }
  
])


export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
