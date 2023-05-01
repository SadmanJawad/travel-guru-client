import React from "react";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import bg from "../assets/Rectangle 1.png";

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
          <LeftNav></LeftNav>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Main;
