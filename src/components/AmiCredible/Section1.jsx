import React from "react";
import Image from "next/image";
import problemIcon from "../../assets/images/the_problem_icon.png";
import welcomeBg from "../../assets/images/welcome-bg.png";

const Section1 = () => (
  <section
    className="w-full  py-10 px-4 md:py-[6.25rem] md:px-[10rem] relative "
    style={{
      backgroundImage: `url(${welcomeBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h1
      className="text-white text-[34px] md:text-[58px] font-bold sm:mt-0 mt-[5rem] text-center mb-[3.5rem]"
      style={{
        lineHeight: "50px",
        letterSpacing: "-4%",
      }}
    >
      AmiCredible –<br />
      AI for Truth in the Digital Age
    </h1>
    <div className="max-w-[100%] w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 ">
      {/* Icon and label */}
      <div className="flex flex-col items-center md:items-start flex-shrink-0">
        <Image
          src={problemIcon}
          alt="The Problem Icon"
          width={100}
          height={100}
          className="crystal-float transform-gpu animate-crystal-float animate-crystal-spin mb-4 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]"
        />
        <span className="text-white text-[24px] md:text-[58px] font-bold mt-4 leading-[34px] sm:leading-[50px]">
          The Problem
        </span>
      </div>
      {/* Text content */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <p
          className="innovation-paragraph text-[18px] md:text-[30px] font-medium mb-2 text-center md:text-left leading-[28px] sm:leading-[46px]"
          style={{
            letterSpacing: "-3%",
          }}
        >
          Misinformation spreads rapidly on social {"  "}
          media, often outpacing the truth. Traditional fact-checking methods
          are reactive, meaning falsehoods have already circulated widely before
          they can be corrected. As a result, users face increasing difficulty
          in distinguishing credible information from misleading content.
        </p>
      </div>
    </div>
  </section>
);

export default Section1;
