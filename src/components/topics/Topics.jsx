import React from "react";
import { useLoaderData } from "react-router-dom";

const Topics = () => {
  const topics = useLoaderData();

  return <div>Topics</div>;
};

export default Topics;
