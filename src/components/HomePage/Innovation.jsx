import React from "react";
import innovationImage from "../../assets/images/innovation-crystal.png";
import innovationBg from "../../assets/images/Innovation-bg.png";
import SectionLayout from "../SectionLayout";
import mockup from "../../assets/images/mockup.png";
import GlobalButton from "../Button";

const Innovation = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${innovationBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionLayout
        iconOrImage={
          <img
            src={innovationImage.src}
            alt="Innovation Icon"
            style={{ width: "250px", height: "250px" }}
          />
        }
        title="Our Innovation"
        ShortTitle="AI-powered truth verification that stops"
        description="misinformation before it spreads. We analyze digital content in real-time, providing instant credibility insights. Transforming how we consume and share information."
        // showLearnMoreButton={true}
        learnMoreLink="/innovation"
        variant="outlined"
      >
        <div className="flex flex-col items-center mt-[9rem] text-center  max-w-6xl mx-auto">
          <h3
            className="text-[60px] font-bold text-white mb-4"
            style={{ letterSpacing: "-4%", lineHeight: "70px" }}
          >
            Presenting <span className="">AmICredible</span> —
            <br />A Plan C for Truth in the Digital Age
          </h3>
          <p
            className="text-[30px] font-medium text-white mt-5  max-w-4xl"
            style={{ letterSpacing: "-4%", lineHeight: "46px" }}
          >
            Misinformation has become a global crisis, eroding trust in
            <br />
            <span className="text-[#FFFFFF80]">
              public discourse. Instead of waiting for tech giants to address
              the problem, Plan C took action.
            </span>
          </p>
        </div>
      </SectionLayout>
      <div className="w-full flex justify-center">
        <img src={mockup.src} alt="ChirpChecker Screenshot" />
      </div>
      <div className="pb-[5rem] w-full flex justify-center ">
        <GlobalButton variant={"outlined"} href="#">
          Learn More
          <span className="ml-2"> →</span>
        </GlobalButton>
      </div>
    </div>
  );
};

export default Innovation;
