import React from "react";
import { FiFacebook } from "react-icons/fi";
import { MdOutlineReviews, MdMiscellaneousServices } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsHddNetworkFill,
  BsChatLeftText,
} from "react-icons/bs";
import { FaLinkedinIn, FaGithubAlt, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-[225px] font-JosefinSans py-10">
      <div className="profile text-center">
        <img
          className="w-[110px] h-[110px] rounded-full object-cover mx-auto"
          src={require("../assets/images/developer-alamin.jpeg")}
          alt="alamin"
        />
        <h1 className="mt-3 capitalize text-lg">Developer Al Amin</h1>
        <h3 className="capitalize text-sm text-gray-300">
          Mern Stack Developer
        </h3>
        <div className="icons flex items-center justify-center gap-4 mt-3">
          <a
            href="https://www.facebook.com/alamin3091"
            target="_blank"
            className="social-icon"
          >
            <FiFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/mdalaminamin"
            target="_blank"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/akalaminamin"
            target="_blank"
            className="social-icon"
          >
            <FaGithubAlt />
          </a>
        </div>
      </div>
      <ul className="mt-10 mx-4">
        <li className="mb-3 flex items-center justify-start">
          <span className="mr-2">
            <FaHome />
          </span>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mb-3 flex items-center justify-start">
          <span className="mr-2">
            <BsFillPersonFill />
          </span>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li className="mb-3 flex items-center justify-start">
          <span className="mr-2">
            <MdMiscellaneousServices />
          </span>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="mb-3 flex items-center justify-start">
          <span className="mr-2">
            <BsHddNetworkFill />
          </span>
          <NavLink to="/projects">Portfolio</NavLink>
        </li>
        <li className="mb-3 flex items-center justify-start ">
          <span className="mr-2">
            <BsChatLeftText />
          </span>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="mb-3 flex items-center justify-start">
          <span className="mr-2">
            <MdOutlineReviews />
          </span>
          <NavLink to="/testimonial">Testimonial</NavLink>
        </li>
        <li className="mb-3 flex items-center justify-start">
          <span className="mr-2">
            <AiOutlineContacts />
          </span>
          <NavLink to="/contact">Contact Me</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
