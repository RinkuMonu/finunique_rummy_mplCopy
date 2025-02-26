import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {

  return (
    <div>
     <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default AppLayout;
