import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const HeroArea = () => {
  return (
    <section
      className="container h-auto md:h-[90vh]"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="flex items-center justify-center h-full py-10 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 font-JosefinSans place-items-center h-full gap-5">
          <div className="content">
            <h2 className="mb-2 text-gray-300">
              <Typed
                strings={[
                  "Mern Stack Developer",
                  "Frontend Developer",
                  "Javascript Developer",
                  "Self Learner",
                ]}
                typeSpeed={60}
                backSpeed={60}
                loop
              ></Typed>
            </h2>
            <h1 className="text-4xl mb-3">
              Hi, I'm{" "}
              <span className="font-bold underline underline-offset-4 decoration-2 decoration-primary decoration-wavy">
                Al Amin
              </span>
            </h1>
            <p>
              I am a Junior Full Stack Web Developer, currently mastering MERN
              stack and it is also my goal. I can convert design to code in
              pixel perfection. I have much knowledge in pure CSS with animation
              and css framework bootstrap and tailwind. And also trying to
              become a master full stack developer. I am always love to learn
              new technology.
            </p>
            <div className="btn mt-5">
              <a
                href="https://drive.google.com/file/d/1SpZG674Lb2qFxo3iVOcplekKHMBOrd7H/view?usp=sharing"
                className="resume-btn"
                target="_blank"
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
