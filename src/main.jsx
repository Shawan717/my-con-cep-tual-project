import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Dashboard from './Dashboard/Dashboard';
import About from './Components/About/About';
import ProductDetails from './Components/Products/ProductDetails/ProductDetails';
import DashboardLayout from './Dashboard/DashboardLayout';
import DashboardProfile from './Dashboard/DashboardProfile';
import DashboardEditProfile from './Dashboard/DashboardEditProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/products",
        element:<Products></Products>,
        loader:()=>fetch(`https://dummyjson.com/products`)
      },
      {
        path:"/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader:(object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
        
      },
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path:"/dashboard",
            element: <DashboardLayout></DashboardLayout>
          },
          {
            path:"/dashboard/profile",
            element: <DashboardProfile></DashboardProfile>
          },
          {
            path:"/dashboard/editProfile",
            element: <DashboardEditProfile></DashboardEditProfile>
          },
        ]
       
      },
      {
        path:"/about",
        element: <About></About>,
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
