import React from "react";
import { Link } from "react-router-dom";
const HeroArea = () => {
  return (
    <section className="container h-auto md:h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 font-JosefinSans place-items-center h-full gap-5">
          <div className="content">
            <h2 className="mb-2 text-gray-300">MERN stack developer</h2>
            <h1 className="text-4xl mb-3">
              Hi, I'm{" "}
              <span className="font-bold underline underline-offset-4 decoration-2 decoration-primary decoration-wavy">
                Al Amin
              </span>
            </h1>
            <p>
              I am a Junior Full Stack Web Developer, currently mastering MERN
              stack and it is also my goal. I can convert design to code in
              pixel perfection. I am a react addict and can make single page
              applications, static and dynamic applications with Express JS and
              mongodb. I have much knowledge in pure CSS with SCSS. And also
              trying to become a master full stack developer.
            </p>
            <div className="btn mt-5">
              <a
                href="#"
                className="px-2 py-3 text-sm font-semibold bg-primary mr-4"
              >
                Get Resume
              </a>
              <Link
                to="/contact"
                className="px-2 py-2 border-2 border-primary hover:bg-primary transition-all ease-linear"
              >
                Hire Me
              </Link>
            </div>
          </div>
          <div className="img">
            <img
              className="rounded-sm"
              src={require("../../../assets/images/developer-alamin.jpeg")}
              alt="developer alamin"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
