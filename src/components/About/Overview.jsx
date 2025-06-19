import React from 'react'
import crystalImage from "../../assets/images/overview-crystal.png";
import welcomeBgImage from "../../assets/images/welcome-bg.png";
import SectionWithImageAndText from "../SectionWithImageAndText/SectionWithImageAndText";

const Overview = () => {
    const imageText1 = "Overview of <br/>Plan C, LLC ";
  const title = "We are a Boston-based consulting and AI ";
  const description =
    "innovation firm specializing in <span style='color: #BFFF00; font-weight: 600;'>strategic product management</span> & <span style='color: #BFFF00; font-weight: 600;'>trustworthy AI solutions</span>. Our mission is to empower companies to achieve product success while using AI to combat misinformation.<br/><br/>By integrating ethical AI practices, we help businesses navigate challenges and seize opportunities in a complex digital landscape, fostering trust and transparency with their users";
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
  )
}

export default Overview
