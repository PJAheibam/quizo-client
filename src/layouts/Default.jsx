import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import GlobalStyles from "../styles/GlobalStyles";
import NavbarSpace from "../components/navbar/NavbarSpace";
import Footer from "../components/footer/Footer";

const Default = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Default;
