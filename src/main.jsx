import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import Web from './Pages/Web.jsx'
import Domain from './Pages/Domain.jsx'
import Login from './Pages/Login.jsx'
import Sign from './Pages/Sign.jsx'
import Booking from './Pages/Booking.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/web",
    element: <Web/>,
  },
  {
    path: "/domain",
    element: <Domain/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/sign",
    element: <Sign/>,
  },
  {
    path: "/booking",
    element: <Booking/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

