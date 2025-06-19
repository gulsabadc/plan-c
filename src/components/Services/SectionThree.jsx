"use client";
import React, { useState } from "react";
import servicesCrystal from "../../assets/images/square-crystal.png";
import servicesBg from "../../assets/images/service-bg.png";
import textureImage from "../../assets/images/texture.png";
import item01 from "../../assets/images/item01.png";
import item02 from "../../assets/images/item02.png";
import item03 from "../../assets/images/item03.png";
import item04 from "../../assets/images/item04.png";
import item05 from "../../assets/images/item05.png";
import SectionLayout from "../../components/SectionLayout";

const serviceItems = [
  {
    count: "001",
    text: "Product Vision & Strategy",
    backgroundImage: item01,
    content: (
      <>
        <p
          className="text-[30px] font-semibold"
          style={{ lineHeight: "46px", letterSpacing: "-4%" }}
        >
          We work with leadership teams to define a clear vision, ensuring that
          product development aligns with business objectives. Our process
          includes:
        </p>
        <ul
          className="list-disc list-inside space-y-1 text-[30px] font-semibold"
          style={{ lineHeight: "46px", letterSpacing: "-4%" }}
        >
          <li>Identifying market gaps and opportunities</li>
          <li>Developing a multi-phase roadmap</li>
          <li>Aligning cross-functional teams</li>
        </ul>
      </>
    ),
  },
  {
    count: "002",
    text: "Market Analysis & Positioning",
    backgroundImage: item02,
    content: (
      <>
        <p
          className="text-[30px] font-semibold"
          style={{ lineHeight: "46px", letterSpacing: "-4%" }}
        >
          Launching and scaling a product requires a strategic, data-driven
          approach. We provide:
        </p>
        <ul
          className="list-disc list-inside space-y-1 text-[30px] font-semibold"
          style={{ lineHeight: "46px", letterSpacing: "-4%" }}
        >
          <li>Market positioning & competitive analysis</li>
          <li>Customer acquisition & retention strategies</li>
          <li>Pricing and business model optimization</li>
        </ul>
      </>
    ),
  },
  {
    count: "003",
    text: "Agile Product Development",
    backgroundImage: item03,
    content: (
      <>
        <p
          className="text-[30px] font-semibold"
          style={{ lineHeight: "46px", letterSpacing: "-4%" }}
        >
          We help teams adopt agile methodologies that improve development
          efficiency and time-to-market:
        </p>
        <ul
          className="list-disc list-inside space-y-1 text-[30px] font-semibold"
          style={{ lineHeight: "46px", letterSpacing: "-4%" }}
        >
          <li>Establishing agile wrokflows</li>
          <li>Implementing iterative MVP testing</li>
          <li>Optimizing cross-functional collaboration</li>
        </ul>
      </>
    ),
  },
  {
    count: "004",
    text: "Go-to-Market Planning",
    backgroundImage: item04,
    content: (
      <>
        <p
          className="text-[30px] font-semibold"
          style={{ lineHeight: "46px", letterSpacing: "-4%" }}
        >
          Launching and scaling a product requires a strategic, data-driven
          approach. We provide:
        </p>
        <ul
          className="list-disc list-inside space-y-1 text-[30px] font-semibold"
          style={{ lineHeight: "46px", letterSpacing: "-4%" }}
        >
          <li>Market positioning & competitive analysis</li>
          <li>Customer acquisition & retention strategies</li>
          <li>Pricing and business model optimization</li>
        </ul>
      </>
    ),
  },
  {
    count: "005",
    text: "AI & Emerging Technology Integration",
    backgroundImage: item05,
    content: (
      <>
        <p
          className="text-[30px] font-semibold"
          style={{ lineHeight: "46px", letterSpacing: "-4%" }}
        >
          We guide companies in leveraging AI-driven solutionns to stay ahead of
          industry trends:
        </p>
        <ul
          className="list-disc list-inside space-y-1 text-[30px] font-semibold"
          style={{ lineHeight: "46px", letterSpacing: "-4%" }}
        >
          <li>Identifying AI applications in product strategy</li>
          <li>Managing AI adoption & compliance</li>
          <li>Scaling data-driven decision-making</li>
        </ul>
      </>
    ),
  },
];

const ServiceItem = ({
  index,
  text,
  backgroundImage,
  isActive,
  onToggle,
  count,
  content, // Optional: pass details to show when active
}) => {
  return (
    <div
      className="text-white px-[4.375rem] pt-[4.375rem] rounded-[2.5rem] pb-[6.25rem] m-4 w-full text-left font-bold text-[2.5rem] relative overflow-hidden cursor-pointer transition-all duration-300"
      onClick={() => onToggle(index)}
      style={{
        letterSpacing: "-4%",
        lineHeight: "3.6875rem",
        border: "1px solid #4C4C4C",
        marginTop: index === 0 ? "4.375rem" : "-4.375rem",
        marginBottom:
          index === 4 ? "3.125rem" : isActive ? "5.625rem" : "0.625rem",
        minHeight: isActive ? "18.75rem" : "9.375rem",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage?.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: `url(${textureImage?.src})`,
          backgroundSize: "cover",
          mixBlendMode: "overlay",
        }}
      />

      {/* Text content */}
      <div className="relative z-20 transition-all duration-300">
        <div className="text-white text-[24px] md:text-[40px] font-bold">
          <span className="text-[#FFFFFF4D] text-[34px] font-[400] pr-6 ">
            {count}
          </span>{" "}
          {text}
        </div>

        {/* Accordion content */}
        {isActive && (
          <div className="mt-6 text-[16px] font-normal text-gray-200 leading-6">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

const SectionThree = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const title = (
    <>
      Consulting <br /> Services
    </>
  );
  const description =
    "AI-driven product management to help organizations innovate, scale, and outperform in competitive digital landscapes. Our approach turns visionary ideas into executable, market-ready strategies.";
  const ShortTitle = "We combine deep industry insight with";

  return (
    <div
      style={{
        backgroundImage: `url(${servicesBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Background texture for the entire section */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${textureImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
          pointerEvents: "none",
          zIndex: 1,
        }}
      ></div>

      <SectionLayout
        iconOrImage={
          <img
            src={servicesCrystal.src}
            alt="Services Icon"
            style={{ width: "250px", height: "250px" }}
          />
        }
        title={title}
        ShortTitle={ShortTitle}
        description={description}
        learnMoreLink="/services"
        variant="filled"
        showLearnMoreButton
      >
        {/* Map through service items with margin-top on first item */}
        {serviceItems.map((item, index) => (
          <ServiceItem
            key={index}
            index={index}
            text={item.text}
            count={item.count}
            content={item.content}
            backgroundImage={item.backgroundImage}
            isActive={activeIndex === index}
            onToggle={handleToggle}
          />
        ))}
      </SectionLayout>
    </div>
  );
};

export default SectionThree;
