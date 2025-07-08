import React from "react";
import crystalImage from "../../assets/images/overview-crystal.png";
import welcomeBgImage from "../../assets/images/welcome-bg.png";
import SectionWithImageAndText from "../SectionWithImageAndText/SectionWithImageAndText";

const SectionOne = () => {
  const imageText1 =
    "Services <br/><span style=' font-weight: 600;'>– Product Strategy<br/> Consulting </span>";
  const title = "Our Product Strategy Consulting helps  ";
  const description = `
startups, healthcare tech firms, and SaaS companies define and execute winning strategies.<br/><br/>

From product vision and market positioning to agile development and go-to-market planning, we guide businesses through every stage of the product lifecycle.
`;
  return (
    <SectionWithImageAndText
      imageSrc={crystalImage}
      imageWidth={15.625 * 16}
      imageHeight={15.625 * 16}
      imageText1={imageText1}
      title={title}
      description={description}
      imageLeft={true}
      bgColor="transparent"
      backgroundImageSrc={welcomeBgImage}
    />
  );
};

export default SectionOne;
