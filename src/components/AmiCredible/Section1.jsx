import React from "react";
import Image from "next/image";
import problemIcon from "../../assets/images/the_problem_icon.png";
import welcomeBg from "../../assets/images/welcome-bg.png";

const Section1 = () => (
  <section
    className="w-full  py-[6.25rem] px-[10rem] relative "
    style={{
      backgroundImage: `url(${welcomeBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h1
      className="text-white text-[58px] font-bold mb-4 text-center mb-[3.5rem]"
      style={{
        lineHeight: "50px",
        letterSpacing: "-4%",
      }}
    >
      AmiCredible –<br />
      AI for Truth in the Digital Age
    </h1>
    <div className="max-w-[100%] w-full flex flex-col md:flex-row items-center justify-center gap-20 ">
      {/* Icon and label */}
      <div className="flex flex-col items-center md:items-start flex-shrink-0">
        <Image
          src={problemIcon}
          alt="The Problem Icon"
          width={200}
          height={200}
          className="mb-2"
        />
        <span className="text-white text-[58px] font-bold mt-4">
          The Problem
        </span>
      </div>
      {/* Text content */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <p
          className="text-white text-[30px] font-bold mb-2 text-center md:text-left"
          style={{
            lineHeight: "46px",
            letterSpacing: "-4%",
          }}
        >
          Misinformation spreads rapidly on social {"  "}
          <span className="text-[#FFFFFF80] text-[30px]  text-center ">
            media, often outpacing the truth. Traditional fact-checking methods
            are reactive, meaning falsehoods have already circulated widely
            before they can be corrected. As a result, users face increasing
            difficulty in distinguishing credible information from misleading
            content.
          </span>
        </p>
      </div>
    </div>
  </section>
);

export default Section1;
