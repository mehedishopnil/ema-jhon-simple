import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './compononets/Shop/Shop.jsx';
import Home from './compononets/Layout/Home.jsx';
import Orders from './compononets/Orders/Orders.jsx';
import Inventory from './compononets/Inventory/Inventory.jsx';
import Login from './compononets/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
      path:'/',
      element:<Shop></Shop>
    },
    {
      path:'orders',
      element:<Orders></Orders>
    },
    {
      path:'inventory',
      element:<Inventory></Inventory>
    },
    {
      path:'login',
      element:<Login></Login>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
