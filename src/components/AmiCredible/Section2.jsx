import React from "react";
import Image from "next/image";
import solutionIcon from "../../assets/images/amicredible_logo.png";
import solutionImg from "../../assets/images/credible_solution.png";
import serviceBg from "../../assets/images/service-bg.png";

const Section2 = () => (
  <section
    className="w-full  pt-[90px] pb-[110px] px-[10rem] flex flex-col items-center relative z-10 m-0"
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
        width={200}
        height={116}
      />
    </div>
    {/* Heading */}
    <h2 className="text-white text-[58px] font-bold mb-6 text-center" style={{
        lineHeight: "50px",
        letterSpacing: "-4%",
      }}
    >
      Our Solution: AmiCredible
    </h2>
    {/* Description */}
    <p className="text-[#FFFFFF80] text-[30px] text-center mb-12" style={{
        lineHeight: "46px",
        letterSpacing: "-4%",
      }}
    >
      <span className="font-bold text-[#FFFFFF]">AmiCredible is an AI-powered tool that
      helps users assess the </span>  credibility of short-form content like tweets and
      statements. It analyzes text in real time, provides a credibility score,
      and suggests clearer, reworded versions to reduce confusion and
      misinformation. By making verification quick and accessible, AmiCredible
      empowers users to share content with more confidence and clarity.
    </p>
    {/* Images */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-4">
      <div className="relative w-[1203px] h-[795px]">
        <Image
          src={solutionImg}
          alt="AmiCredible Solution Screenshot 2"
          
        />
      </div>
    </div>
  </section>
);

export default Section2;
