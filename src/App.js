import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './Component/Home'
import AddStudent from './Component/AddStudent'
import EditStudent from "./Component/EditStudent"
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
        path:"/addstudent",
        element:<AddStudent />
      },
      {
        path:"/editstudent/:id",
        element:<EditStudent />
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
