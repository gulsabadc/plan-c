import React from "react";
import servicesCrystal from "../../assets/images/square-crystal.png";
import servicesBg from "../../assets/images/service-bg.png";
import SectionLayout from "../../components/SectionLayout";

const Services = () => {
  const title = "Services";
  const description =
    "AI-driven product management to help organizations innovate, scale, and outperform in competitive digital landscapes. Our approach turns visionary ideas into executable, market-ready strategies.";
  const ShortTitle = "We combine deep industry insight with";

  // Define common classes for service items
  const serviceItemClasses =
    " letter-spacing-[-4%] text-white px-[70px] py-[50px] m-4 w-[100%] rounded-[10px] text-left font-bold text-[40px] ";

  return (
    <div
      style={{
        backgroundImage: `url(${servicesBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionLayout
        iconOrImage={
          <img
            src={servicesCrystal.src}
            alt="Services Icon"
            style={{ width: "190px", height: "200px" }}
          />
        }
        title={title}
        ShortTitle={ShortTitle}
        description={description}
        learnMoreLink="/services"
        variant="filled"
        showLearnMoreButton
      >
        {/* List of services go here with styling */}
        <div
          className={`${serviceItemClasses} mt-[3rem] bg-[#4A7453] border border-[#4C4C4C] blend-multiply`} 
          style={{letterSpacing: "-4%", lineHeight:'59px'}}
        >
          Product Vision & Strategy
        </div>
        <div
          className={`${serviceItemClasses} bg-[#3A6743] border border-[#4C4C4C]`}
          style={{letterSpacing: "-4%", lineHeight:'59px'}}
        >
          Market Analysis & Positioning
        </div>
        <div
          className={`${serviceItemClasses}  bg-[#2D5536] border border-[#4C4C4C]`}
          style={{letterSpacing: "-4%", lineHeight:'59px'}}
        >
          Agile Product Development
        </div>
        <div
          className={`${serviceItemClasses}  bg-[#1D4426] border border-[#4C4C4C]`}
          style={{letterSpacing: "-4%", lineHeight:'59px'}}
        >
          Go-to-Market Planning
        </div>
        <div
          className={`${serviceItemClasses}  bg-[#14361C] border border-[#4C4C4C]`}
          style={{letterSpacing: "-4%", lineHeight:'59px'}}
        >
          AI & Emerging Technology Integration
        </div>
      </SectionLayout>
    </div>
  );
};

export default Services;
