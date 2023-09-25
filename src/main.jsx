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
import cartProductsLoader from './loders/cartProductsLoader.js';
import Checkout from './compononets/Checkout/Checkout.jsx';
import SignUp from './compononets/SignUp/SignUp.jsx';
import AuthProvider from './compononets/providers/AuthProvider.jsx';
import PrivateRoute from './routs/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
      path:'/',
      element:<Shop></Shop>,
      loader: () => fetch('http://localhost:5000/totalProducts')
    },
    {
      path:'orders',
      element:<Orders></Orders>,
      loader: cartProductsLoader
    },
    {
      path:'inventory',
      element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'checkout',
      element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
    },
    {
      path:'sign-up',
      element: <SignUp></SignUp>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
