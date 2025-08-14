import React from "react";
import { Outlet } from "react-router";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
      </Outlet>
    </div>
  );
};

export default Root;
