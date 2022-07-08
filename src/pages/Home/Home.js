import React from "react";
import HeroArea from "./components/HeroArea";
import Homeblog from "./components/Homeblog";
import HomeFooter from "./components/HomeFooter";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import ServicesSection from "./components/ServicesSection";

const Home = () => {
  return (
    <div className="h-auto">
      <HeroArea />
      <ServicesSection />
      <PortfolioSection />
      <Homeblog />
      <HomeFooter />
    </div>
  );
};

export default Home;
