import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
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
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/blog",
        element:<Blog />
      },
      {
        path:"/contact",
        element:<Contact />
      }
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
