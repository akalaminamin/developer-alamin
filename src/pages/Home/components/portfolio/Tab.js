import React, {useState} from 'react'
import projects from "../../../../data.js";

const Tab = ({allPortfolio, setAllPortfolio}) => {
    const [category, setCategory] = useState("All");
    const filterdPortfolio = (cate) => {
      setCategory(cate);
      const filteredProject = projects.filter((item) => item.category === cate);
      setAllPortfolio(filteredProject);
    };
  return (
    <>
     <div className="flex items-center justify-center gap-3 mb-6">
          <button
            className={category === "All" ? "tab-btn bg-primary" : "tab-btn"}
            onClick={() => {
              setCategory("All");
              setAllPortfolio(projects);
            }}
          >
            All
          </button>
          <button
            className={category === "Html" ? "tab-btn bg-primary" : "tab-btn"}
            onClick={() => filterdPortfolio("Html")}
          >
            Html
          </button>
          <button
            className={category === "React" ? "tab-btn bg-primary" : "tab-btn"}
            onClick={() => filterdPortfolio("React")}
          >
            React
          </button>
          <button
            className={category === "Mern" ? "tab-btn bg-primary" : "tab-btn"}
            onClick={() => filterdPortfolio("Mern")}
          >
            Mern
          </button>
        </div>   
    </>
  )
}

export default Tab