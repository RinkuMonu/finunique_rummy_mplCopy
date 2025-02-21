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

function App() {
  const[logincheck,setlogin]=useState(false)
  const router = createBrowserRouter([

    {
      path: "/",
      element: (
        <>
          <ScrollToTop /> {/* ScrollToTop ko Router ke andar rakhna zaroori hai */}
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
