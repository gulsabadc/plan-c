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
    "text-white px-[30px] py-[20px] mb-4 w-[50%] rounded-[1px] text-center font-bold text-[40px] text-center";

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
          className={`${serviceItemClasses} mt-[3rem] bg-[#4A7453] border border-[#4C4C4C]`}
        >
          Product Vision & Strategy
        </div>
        <div
          className={`${serviceItemClasses} bg-[#3A6743] border border-[#4C4C4C]`}
        >
          Market Analysis & Positioning
        </div>
        <div
          className={`${serviceItemClasses}  bg-[#2D5536] border border-[#4C4C4C]`}
        >
          Agile Product Development
        </div>
        <div
          className={`${serviceItemClasses}  bg-[#1D4426] border border-[#4C4C4C]`}
        >
          Go-to-Market Planning
        </div>
        <div
          className={`${serviceItemClasses}  bg-[#14361C] border border-[#4C4C4C]`}
        >
          AI & Emerging Technology Integration
        </div>
      </SectionLayout>
    </div>
  );
};

export default Services;
