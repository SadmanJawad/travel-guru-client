import React from "react";
import bg from "../assets/Rectangle 1.png";
import Header from "../components/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <img src={bg} alt="" className="h-auto" />
      </div>

      <div className="absolute top-0 left-0 w-full">
       <Header></Header>
        <div className="grid lg:grid-cols-2">
     <Outlet></Outlet>
        </div>
      </div>
    
    </div>
  );
};

export default Main;
