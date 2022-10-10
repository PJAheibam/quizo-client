import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import GlobalStyles from "../styles/GlobalStyles";

const Default = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Default;
