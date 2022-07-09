import React from "react";
import { FaLink, FaGithub, FaDatabase } from "react-icons/fa";

const SinglePortfolio = ({ project }) => {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 content-start group"
        key={project.id}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-daily="500"
      >
        <div className="w-full overflow-hidden h-[300px]">
          <div className="h-auto">
          <img
            className="h-auto w-full transition-transform group-hover:translate-y-[-80%] overflow-hidden cursor-pointer duration-[5000ms]"
            src={project.imgLink}
            alt="project"
          />
          </div>
        </div>
        <div className="content">
          <h2 className="text-xl mb-2">{project.title}</h2>
          <p className="text-sm">{project.description}</p>
          <div className="flex items-center justify-start gap-3 mt-5 flex-wrap mb-3">
            {project?.technologies.map((technology, index) => (
              <p
                key={index}
                className="px-2 bg-gray-300 text-gray-900 rounded-sm text-sm whitespace-nowrap"
              >
                {technology}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-start gap-3">
            <a
              className="text-primary cursor-pointer text-xl"
              href={project.liveLink}
              target="_blank"
            >
              <FaLink />
            </a>
            <a
              className="text-primary cursor-pointer text-xl"
              href={project.clientLink}
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="text-primary cursor-pointer text-xl"
              href={project.backendLink}
              target="_blank"
            >
              <FaDatabase />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePortfolio;
