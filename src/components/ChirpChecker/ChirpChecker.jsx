import React from "react";
import SectionWithImageAndText from "../SectionWithImageAndText/SectionWithImageAndText";
import chirpCheckerImage from "../../../public/images/crystal.png";

const ChirpChecker = () => {
  const title = "Welcome to ChirpChecker";
  const description =
    "This is the ChirpChecker section, an AI-powered tool for truth verification and combating misinformation. It helps users analyze content for accuracy and identify potential disinformation.";

  return (
    <SectionWithImageAndText
      imageSrc={chirpCheckerImage}
      title={title}
      description={description}
      imageLeft={true}
      bgColor="transparent"
    />
  );
};

export default ChirpChecker;
