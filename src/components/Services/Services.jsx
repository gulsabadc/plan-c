import React from "react";
import servicesCrystal from "../../assets/images/square-crystal.png";
import servicesBg from "../../assets/images/service-bg.png";
import textureImage from "../../assets/images/texture.png";
import item01 from "../../assets/images/item01.png";
import item02 from "../../assets/images/item02.png";
import item03 from "../../assets/images/item03.png";
import item04 from "../../assets/images/item04.png";
import item05 from "../../assets/images/item05.png";
import SectionLayout from "../../components/SectionLayout";

const ServiceItem = ({ index, text, backgroundImage }) => (
  <div
    className="text-white px-[70px] py-[50px] m-4 w-[100%] rounded-[10px] text-left font-bold text-[40px] relative overflow-hidden"
    style={{
      letterSpacing: "-4%",
      lineHeight: "59px",
      border: "1px solid #4C4C4C",
      marginTop: index === 0 ? "70px" : "10px",
      marginBottom: index === 4 ? "50px" : "10px",
    }}
  >
    {/* Background image layer */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>

    {/* Texture overlay */}
    <div
      className="absolute inset-0 z-10 opacity-20"
      style={{
        backgroundImage: `url(${textureImage.src})`,
        backgroundSize: "cover",
        mixBlendMode: "overlay",
      }}
    ></div>

    {/* Text content */}
    <div className="relative z-20">{text}</div>
  </div>
);

const Services = () => {
  const title = "Services";
  const description =
    "AI-driven product management to help organizations innovate, scale, and outperform in competitive digital landscapes. Our approach turns visionary ideas into executable, market-ready strategies.";
  const ShortTitle = "We combine deep industry insight with";

  const serviceItems = [
    { text: "Product Vision & Strategy", backgroundImage: item01 },
    { text: "Market Analysis & Positioning", backgroundImage: item02 },
    { text: "Agile Product Development", backgroundImage: item03 },
    { text: "Go-to-Market Planning", backgroundImage: item04 },
    { text: "AI & Emerging Technology Integration", backgroundImage: item05 },
  ];

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
            backgroundImage={item.backgroundImage}
          />
        ))}
      </SectionLayout>
    </div>
  );
};

export default Services;
