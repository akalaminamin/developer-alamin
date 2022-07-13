import React from "react";
import { FiFacebook } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsHddNetworkFill,
  BsChatLeftText,
} from "react-icons/bs";
import { FaLinkedinIn, FaGithubAlt, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidebar = ({ open, setOpen }) => {
  const menus = [
    {
      text: "Home",
      icon: <FaHome />,
      path: "/",
    },
    {
      text: "About Me",
      icon: <BsFillPersonFill />,
      path: "about",
    },
    {
      text: "Services",
      icon: <MdMiscellaneousServices />,
      path: "services",
    },
    {
      text: "Portfolio",
      icon: <BsHddNetworkFill />,
      path: "portfolio",
    },
    {
      text: "Blog",
      icon: <BsChatLeftText />,
      path: "blog",
    },
    // {
    //   text: "Testimonial",
    //   icon: <MdOutlineReviews />,
    //   path: "testimonial",
    // },
    {
      text: "Contact Me",
      icon: <AiOutlineContacts />,
      path: "contact",
    },
  ];
  return (
    <div className="w-auto font-JosefinSans py-10">
      <div className="profile text-center pt-[50px] md:pt-0">
        <img
          className="w-[110px] h-[110px] rounded-full object-cover mx-auto"
          src={require("../assets/images/developer-alamin.jpeg")}
          alt="alamin"
        />
        <h1 className="mt-3 capitalize text-lg">Developer Al Amin</h1>
        <h3 className="capitalize text-sm text-gray-300">
        Frontend Developer
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
        {menus.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-white hover:text-primary"
            }
            onClick={() => setOpen(!open)}
          >
            <li className="mb-3 flex items-center justify-start">
              <span className="mr-2">{menu.icon}</span>
              {menu.text}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
