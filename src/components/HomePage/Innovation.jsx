import React from "react";
import innovationImage from "../../assets/images/innovation-crystal.png";
import innovationBg from "../../assets/images/Innovation-bg.png";
import SectionLayout from "../SectionLayout";
import mockup from "../../assets/images/AmiCredible.png";
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
        iconOrImage={<img src={innovationImage.src} alt="Innovation Icon" />}
        title="Our Innovation"
        description="AI-powered truth verification that stops misinformation before it spreads. We analyze digital content in real-time, providing instant credibility insights. Transforming how we consume and share information."
        // showLearnMoreButton={true}
        learnMoreLink="/innovation"
        variant="outlined"
      >
        <div className="flex flex-col items-center mt-[3rem] sm:mt-[9rem] text-center  max-w-6xl mx-auto">
          <h3
            className="text-[30px] sm:text-[60px] font-bold text-white mb-4 leading-[100%] sm:leading-[60px]"
            style={{ letterSpacing: "-4%" }}
          >
            Presenting <span className="">AmICredible</span> —
            <br />A Plan C for Truth in the Digital Age
          </h3>
          <p
            className="innovation-paragraph text-[22px] sm:text-[30px] font-medium mt-5 leading-[28px] sm:leading-[46px] max-w-4xl text-center sm:text-left"
            style={{ letterSpacing: "-4%" }}
          >
            Misinformation is damaging society on a global scale, leaving
            individuals feeling powerless in its wake. Instead of simply
            accepting this reality, Plan C decided to do something about it—in a
            new and revolutionary way.
          </p>
        </div>
      </SectionLayout>
      <div className="w-full flex justify-center mb-5 sm:p-0 p-[20px]">
        <img src={mockup.src} alt="ChirpChecker Screenshot" />
      </div>
      <div className="pb-[5rem] w-full flex justify-center ">
        <GlobalButton variant={"outlined"} href="/amiCredible">
          Learn More
          <span className="ml-2"> →</span>
        </GlobalButton>
      </div>
    </div>
  );
};

export default Innovation;
