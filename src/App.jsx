import React, { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

export default function App() {


  let router = createBrowserRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'services', element: <Services></Services> },
        { path: 'contact', element: <Contact></Contact> },
        { path: 'projects', element: <Projects></Projects> },

      ]
    }
  ])



  return (<>



    <RouterProvider router={router}></RouterProvider>








  </>

  )
}
