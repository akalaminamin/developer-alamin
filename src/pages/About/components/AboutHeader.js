import React from "react";
import FooterIcon from "../../../shared/FooterIcon";

const AboutHeader = () => {
  const skills = [
    {
      category: "Expertise in",
      technology: [
        "Html",
        "Css",
        "Javascript",
        "ES6",
        "React",
        "Bootstrap",
        "Tailwind Css",
        "Redux",
        "Redux toolkit query",
      ],
    },
    {
      category: "Comfortable with",
      technology: [
        "Node",
        "Express",
        "MongoDB",
        "Mongoose",
        "Material UI",
        "Firebase",
        "Next JS",
      ],
    },
    {
      category: "Familiar with",
      technology: ["TypeScript", "Rechart", "Chart JS"],
    },
    {
      category: "Tools I use",
      technology: [
        "Git",
        "VS Code",
        "Netlify",
        "Heroku",
        "Postmen",
        "Figma",
        "Adobe XD",
      ],
    },
  ];
  return (
    <section className="text-center font-JosefinSans section-padding">
      <div data-aos="zoom-out-up" data-aos-duration="1000">
        <div>
          <img
            className="w-auto h-[300px] object-cover rounded-lg mx-auto"
            src={require("../../../assets/images/developer-alamin.jpeg")}
            alt="developer alamin"
          />
        </div>
        <h2 className="text-xl font-semibold my-4">Developer Al Amin</h2>
        <p>
          Al Amin, currently training himself aggresively to become a master
          level MERN stack devloper. <br /> currently studying honours in
          Marketing but have passion in <br /> Software Development and
          Programming.
        </p>
        <div className="mb-5">
          <FooterIcon />
        </div>
        <a href="https://drive.google.com/file/d/1SpZG674Lb2qFxo3iVOcplekKHMBOrd7H/view" target="_blank" className="resume-btn">
          Get Resume
        </a>
        <h2 className="section-title mb-6 text-white text-left">My Skills</h2>
      </div>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-lg font-semibold text-left mb-2">
            {skill.category}
          </h2>
          <div className="flex items-center justify-start flex-wrap gap-4">
            {skill.technology.map((tech, index) => (
              <p
                className="text-sm bg-gray-400 px-3 text-black rounded-sm"
                key={index}
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutHeader;
