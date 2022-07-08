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
                "I am very comfortable working with react. I know react router, various react framework like Material UI, react bootstrap, ant design etc. I am comfortable with firebase auth also. I am comfortable with context API and redux both for state management.",
        },
        {
            icon: <FiFigma />,
            title: "PSD/Figma to React",
            description:
                "I am very comfortable working with react. I know react router, various react framework like Material UI, react bootstrap, ant design etc. I am comfortable with firebase auth also. I am comfortable with context API and redux both for state management.",
        },
        {
            icon: <BiCodeCurly />,
            title: "Backend Development",
            description:
                "I also do back end using Node js, express js as backend and mongodb as database. I am comfortable with mongoose ODM. I usually work with Rest API but also known to GraphQL. I use JWT token for security reason for safe APIs.",
        },
        {
            icon: <AiFillBug />,
            title: "Bug Fixing",
            description:
                "I also do back end using Node js, express js as backend and mongodb as database. I am comfortable with mongoose ODM. I usually work with Rest API but also known to GraphQL. I use JWT token for security reason for safe APIs.",
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
                "WPCamel is adept at customizing WordPress. We work with premium themes and plugins of your choice.",
        },
    ];
    return (
        <section className="py-10 text-gray-200 font-JosefinSans">
            <div className="">
                <h2 className="section-title mb-6 text-white">What I will do for you</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {services?.map((item, index) => (
                        <div key={index}>
                            <span className="text-4xl text-gray-300">{item.icon}</span>
                            <h2 className="md:text-2xl text-xl font-semibold mt-5 mb-2">{item.title}</h2>
                            <p className="text-[14px] md:text-[16px]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
