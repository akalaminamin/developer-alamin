import React, { useState } from "react";
import SinglePortfolio from "./SinglePortfolio.js";
import { Link } from "react-router-dom";
import { projects } from "../../../../data.js";
import Tab from "./Tab.js";

const PortfolioSection = () => {
  const [allPortfolio, setAllPortfolio] = useState(projects);
  return (
    <section className="py-10 text-gray-200 font-JosefinSans">
      <h2 className="section-title mb-6 text-white">My Works</h2>
      <div className="grid grid-cols-1 gap-5">
        <Tab allPortfolio={allPortfolio} setAllPortfolio={setAllPortfolio} />
        {allPortfolio.slice(0, 3).map((project, index) => (
          <SinglePortfolio project={project} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="/projects"
          className="px-4 py-2 bg-primary hover:bg-transparent hover:border-primary border-2 border-primary transition-all ease-linear duration-200 cursor-pointer mt-3"
        >
          View All Work
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
