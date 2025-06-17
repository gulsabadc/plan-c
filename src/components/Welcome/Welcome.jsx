import React from "react";
import SectionWithImageAndText from "../SectionWithImageAndText/SectionWithImageAndText";
import crystalImage from "../../assets/images/Mask.png";
import welcomeBgImage from "../../assets/images/welcome-bg.png";

const Welcome = () => {
  const imageText1 = "Welcome to Plan C, LLC ";
  const imageText2 = "—where product strategy meets AI innovation";
  const title = "Life rarely goes according to the first plan";

  const description =
    "Life rarely goes according to the first plan —or even the second. Whether in business, technology, or innovation, challenges arise, forcing us to adapt and rethink our approach.<br/> <br/> At Plan C, we embrace out-of-the-box thinking—not as a last resort, but as a strategic advantage. When Plan A falls short and Plan B doesn't quite fit, we take what we've learned, refine our vision, and craft a smarter, more insightful path forward—a Plan C.";

  return (
    <SectionWithImageAndText
      imageSrc={crystalImage}
      imageWidth={300}
      imageHeight={300}
      imageText1={imageText1}
      imageText2={imageText2}
      title={title}
      description={description}
      imageLeft={true}
      bgColor="transparent"
      backgroundImageSrc={welcomeBgImage}
    />
  );
};

export default Welcome;
