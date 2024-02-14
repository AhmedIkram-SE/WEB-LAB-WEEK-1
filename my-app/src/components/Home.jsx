import React from "react";
import { Link, Outlet } from "react-router-dom";
import Head from "./Head";
import ApiFetch from "./ApiFetch";

const Home = () => {
  return (
    <>
      <Head />
      <ApiFetch />
      <h1>I Am Home</h1>
      <Outlet />
    </>
  );
};

export default Home;
