import React from "react";
import { FaRegEdit, FaGithub, FaDatabase } from "react-icons/fa";

const SinglePortfolio = ({ allPortfolio }) => {
  return (
    <>
      {allPortfolio.map((project, index) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 content-start"
          key={index}
        >
          <div className="h-[200px] w-full">
            <img
              className="h-full w-full object-cover"
              src={project.imgLink}
              alt="project"
            />
          </div>
          <div className="content">
            <h2 className="text-xl mb-2">{project.title}</h2>
            <p className="text-sm">{project.description}</p>
            <div className="flex items-center justify-start gap-3 mt-5 flex-wrap mb-3">
              {project?.technologies.map((technology, index) => (
                <p
                  key={index}
                  className="px-2 bg-gray-300 text-gray-900 rounded-md text-sm whitespace-nowrap"
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
                <FaRegEdit />
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
      ))}
    </>
  );
};

export default SinglePortfolio;
