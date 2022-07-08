import React from "react";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <section className="py-10 text-gray-200 font-JosefinSans">
      <div className="">
        <h2 className="section-title mb-6 text-white">Get in touch</h2>
        <div className="text-center">
          <h3 className="text-2xl">I'd love to hear from you</h3>
          <p>I always keep some time along with my works to broad and give strength to my developer community. <br /> Feel free to give any feedback, advice, allegation or anything else...</p>
          <Link to="/contact" className="tab-btn capitalize mt-4 !inline-block">Say Hello</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFooter;
