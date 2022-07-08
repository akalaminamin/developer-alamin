import React from "react";
import HeroArea from "./components/HeroArea";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import ServicesSection from "./components/ServicesSection";

const Home = () => {
  return (
    <div className="h-auto">
      <HeroArea />
      <ServicesSection />
      <PortfolioSection />
    </div>
  );
};

export default Home;
