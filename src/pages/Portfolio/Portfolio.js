import React, { useState } from "react";
import SinglePortfolio from "../Home/components/portfolio/SinglePortfolio";
import Tab from "../Home/components/portfolio/Tab";
import {projects} from "../../data.js";
import Footer from "../../shared/Footer";

const Portfolio = () => {
  const [allPortfolio, setAllPortfolio] = useState(projects);
  return (
    <>
    <section className="py-10 text-gray-200 font-JosefinSans">
      <div className="">
        <h2 className="section-title mb-6 text-white">My Works</h2>
        <Tab allPortfolio={allPortfolio} setAllPortfolio={setAllPortfolio} />
        <div className="grid grid-cols-1 gap-16">
          {allPortfolio.map((project, index) => (
            <SinglePortfolio project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Portfolio;
