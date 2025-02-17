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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
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
        element: <Login />
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
