import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import GlobalStyles from "../styles/GlobalStyles";
import NavbarSpace from "../components/navbar/NavbarSpace";

const Default = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <NavbarSpace />
      <Outlet />
    </>
  );
};

export default Default;
