import React from "react";
import Image from "next/image";
import solutionIcon from "../../assets/images/amicredible_logo.png";
import solutionImg from "../../assets/images/credible_solution.png";
import serviceBg from "../../assets/images/service-bg.png";

const Section2 = () => (
  <section
    className="w-full  py-10 px-4 md:py-[6.25rem] md:px-[10rem] flex flex-col items-center relative z-10 m-0"
    style={{
      backgroundImage: `url(${serviceBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Icon */}
    <div className="mb-4">
      <Image
        src={solutionIcon}
        alt="AmiCredible Solution Icon"
        width={155}
        height={86}
        className="mb-4 w-[155px] h-[86px] sm:w-[207px ] sm:h-[116px]"
      />
    </div>
    {/* Heading */}
    <h2
      className="text-white text-[24px] md:text-[58px] font-bold mb-6 text-center leading-[34px] sm:leading-[50px]"
      style={{
        letterSpacing: "-4%",
      }}
    >
      Our Solution: AmiCredible
    </h2>
    {/* Description */}
    <p
      className="text-[#FFFFFF80] innovation-paragraph text-[18px] md:text-[30px] text-center mb-12 leading-[28px] sm:leading-[46px]"
      style={{
        letterSpacing: "-4%",
      }}
    >
      AmiCredible is an AI-powered tool that helps users assess the{" "}
      credibility of short-form content like tweets and statements. It analyzes
      text in real time, provides a credibility score, and suggests clearer,
      reworded versions to reduce confusion and misinformation. By making
      verification quick and accessible, AmiCredible empowers users to share
      content with more confidence and clarity.
    </p>
    {/* Images */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-4">
      <div className="relative w-[100%] h-[100%]">
        <Image  
          src={solutionImg}
          alt="AmiCredible Solution Screenshot 2"
          className="w-[100%] h-[100%]"
        />
      </div>
    </div>
  </section>
);

export default Section2;
