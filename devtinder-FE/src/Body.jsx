import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  // min-h-screen ensures the entire viewport height is used.
  //flex-grow allows the Outlet (which contains Login) to take up remaining space.
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
