import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Pages/Home/Home";
import AppLayout from "./component/AppLayout/AppLayout";
import About from './component/Pages/About/About';
import Terms from './component/Pages/Terms';
import PrivacyPolicy from './component/Pages/PrivacyPolicy';
import Cancel from './component/Pages/Cancel';
import ContactSupport from './component/Pages/Contact/ContactSupport';
import Blog from './component/Pages/Blog/Blog';
import Login from './component/Pages/Login/Login';
import Register from './component/Pages/Login/Register';
import { useState } from 'react';
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import PokerPage from './component/Pages/all games/Poker';
import Pool from './component/Pages/all games/Pool';
import Rummy from './component/Pages/all games/Rummy';
import Faq from './component/Pages/Home/Faq';
import Texas from './component/Pages/all games/Texas';
import PLO4 from './component/Pages/all games/PLO4';
import PLO5 from './component/Pages/all games/PLO5';
import PLO6 from './component/Pages/all games/PLO6';
import Pointsrummy from './component/Pages/all games/RummyGames/Pointsrummy';
import PoolRummy from './component/Pages/all games/RummyGames/PoolRummy';
import DealsRummy from './component/Pages/all games/RummyGames/DealsRummy';
import Gamerules from './component/Pages/Gamerules/Gamerules';
import PaymentStatus from './component/Pages/PaymentStatus';
import Checkoutsecond from './component/Pages/Checkoutsecond';

function App() {
  const[logincheck,setlogin]=useState(false)
  const router = createBrowserRouter([

    {
      path: "/",
      element: (
        <>
          <ScrollToTop /> 
          <AppLayout />
        </>),
      children: [
        {
          path: "/",
          element: <Home setlogin={logincheck} />,
        },
        {
          path: "/poker",
          element: <PokerPage />,
        },
        {
          path: "/texas",
          element: <Texas />,
        },
        {
          path: "/plo4",
          element: <PLO4 />,
        },
        {
          path: "/plo5",
          element: <PLO5 />,
        },
        {
          path: "/plo6",
          element: <PLO6 />,
        },
  
        {
          path: "/pool",
          element: <Pool/>,
        },
        {
          path: "/rummy",
          element: <Rummy/>,
        },
        {
          path: "/faq",
          element: <Faq/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
  
        {
          path: "/terms",
          element: <Terms />,
        },
        {
          path: "/privacy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/cancel",
          element: <Cancel />,
        },
        {
          path: "/contact",
          element: <ContactSupport />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/pointsrummy",
          element: <Pointsrummy />,
        },
        {
          path: "/poolrummy",
          element: <PoolRummy />,
        },
        {
          path: "/dealsrummy",
          element: <DealsRummy />,
        },
        {
          path: "/gamerules",
          element: <Gamerules />,
        },
          {
          path: "/paymentstatus",
          element: <PaymentStatus />,
        },  {
          path: "/checkout",
          element: <Checkoutsecond />,
        },
       
      ],
     
    },
    {
        path: "/login",
        element: <Login  setlogin={logincheck}/>
    },
    {
        path: "/register",
        element: <Register />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
