import React from "react";
import { AiFillBug } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { FaLaptopCode, FaWordpressSimple } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
const ServicesSection = () => {
  const services = [
    {
      icon: <BsCodeSlash />,
      title: "Frontend Development with React",
      description:
        "I am very comfortable working with react. I know react router, various react framework like Material UI, react bootstrap etc. I am comfortable with firebase auth also. I am comfortable with context API and redux and redux toolkit query both for state management.",
    },
    {
      icon: <FiFigma />,
      title: "PSD/Figma to React",
      description:
        "I am convert any PSD/Figma design to React with pixel perfect design using bootstrap or tailwind css. I have good experience in bootstrap and tailwind css.",
    },
    {
      icon: <BiCodeCurly />,
      title: "Backend Development",
      description:
        "I also do back end using Node js, express js as backend and mongodb as database. I am comfortable with mongoose ODM. I have a knowladge how to make a Rest Api. I use JWT token for security reason for safe APIs.",
    },
    {
      icon: <AiFillBug />,
      title: "Bug Fixing",
      description:
        "Website problems and bugs are a common problem for every website. I will fix the problem of your website very easily and in a very short time. I really enjoy fixing any website bugs.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      description:
        "I can build a full stack application from sketch. The design mockup and backend features is just needed to start up. I am sure to deliver you a secured fluence full stack application. I prefer MERN stack to build a full stack application more.",
    },
    {
      icon: <FaWordpressSimple />,
      title: "Wordpress theme customization",
      description:
        "I have good knowladge in wordpress theme customization with elementor plugin. I have customize many wordpress theme like ecommerce, LMS, portfolio, delivery etc.",
    },
  ];
  return (
    <section className="py-10 text-gray-200 font-JosefinSans">
      <div className="">
        <h2 className="section-title mb-6 text-white">
          What I will do for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services?.map((item, index) => (
            <div key={index} data-aos="zoom-in" data-aos-duration="1000">
              <span className="text-4xl text-gray-300">{item.icon}</span>
              <h2 className="md:text-2xl text-xl font-semibold mt-5 mb-2">
                {item.title}
              </h2>
              <p className="text-[14px] md:text-[16px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
