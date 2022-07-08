import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-300 h-auto md:h-screen font-JosefinSans">
        <div className="">
          <div
            className={`bg-gray-700 fixed h-full text-white md:w-[225px] w-full z-30 block md:-ml-0 transition-all ease-linear duration-500 ${
              !open ? "-ml-[400px]" : "-ml-0"
            }`}
          >
            <Sidebar open={open} setOpen={setOpen} />
          </div>
          <div className="md:ml-[225px] ml-0 px-4 bg-gray-800 text-white h-auto py-10 md:py-0">
            <div className="md:hidden w-full flex items-center justify-between mb-20 fixed top-0 bg-gray-800 py-5 z-50">
              <h2 className="text-xl text-white">Developer Al Amin</h2>
              <span
                className="text-white text-xl fixed top-5 right-6"
                onClick={() => setOpen(!open)}
              >
                {!open ? <FiMenu /> : <ImCross />}
              </span>
            </div>
            <div className="container">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
