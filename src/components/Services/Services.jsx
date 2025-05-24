import React from "react";
import servicesCrystal from "../../assets/images/square-crystal.png";
import SectionLayout from "../../components/SectionLayout";

const Services = () => {
  const title = "Services";
  const title2 = "We combine deep industry insight with ";
  const description =
    "AI-driven product management to help organizations innovate, scale, and outperform in competitive digital landscapes. Our approach turns visionary ideas into executable, market-ready strategies.";

  const ShortTitle = "";

  // Define common classes for service items
  const serviceItemClasses = "bg-[#1a331a] text-white p-4 mb-4 rounded"; // Example background color, padding, text color, margin, and rounded corners

  return (
    <SectionLayout
      iconOrImage={
        <img
          src={servicesCrystal.src}
          alt="Services Icon"
          style={{ width: "100px", height: "100px" }}
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
      <div className={serviceItemClasses}>Product Vision & Strategy</div>
      <div className={serviceItemClasses}>Market Analysis & Positioning</div>
      <div className={serviceItemClasses}>Agile Product Development</div>
      <div className={serviceItemClasses}>Go-to-Market Planning</div>
      <div className={serviceItemClasses}>
        AI & Emerging Technology Integration
      </div>
    </SectionLayout>
  );
};

export default Services;
