import React from 'react'

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Write from './pages/Write';
import Single from './pages/Single'
import PageNotFound from './pages/PageNotFound'


const Layout = () =>{
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/write',
        element: <Write/>
      },
      {
        path:'/post/:id',
        element: <Single/>,
        // errorElement: <PageNotFound/>
      }
    ],
    // errorElement: <PageNotFound/>
    
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);




const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}


export default App