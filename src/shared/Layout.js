import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-300 h-auto md:h-screen">
        <div className="">
          <div className="bg-gray-700 fixed h-full text-white hidden md:block">
            <Sidebar />
          </div>
          <div className="ml-[225px] px-4 bg-gray-800 text-white h-auto ">
            <div className="container">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
