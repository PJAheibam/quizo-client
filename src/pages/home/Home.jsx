import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const res = useLoaderData();
  console.info(res);
  return <div>Home</div>;
};

export default Home;
