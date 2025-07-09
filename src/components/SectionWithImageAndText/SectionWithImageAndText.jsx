"use client";

import React from "react";
import Image from "next/image";

const SectionWithImageAndText = ({
  imageSrc,
  imageWidth,
  imageHeight,
  imageText1,
  imageText2,
  description,
  imageLeft = true,
  bgColor = "#00310A",
  backgroundImageSrc,
}) => {
  const sectionStyle = backgroundImageSrc
    ? {
        backgroundImage: `url(${backgroundImageSrc.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }
    : {};

  return (
    <section
      className={`w-full  py-[30px] sm:py-[6.25rem] px-[30px] sm:px-[10rem] relative z-10 m-0`}
      style={sectionStyle}
    >
      <div
        className={`max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 ${
          imageLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
          <Image
            src={imageSrc}
            alt="Image"
            width={100}
            height={100}
            className="crystal-float transform-gpu animate-crystal-float animate-crystal-spin mb-4 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]"
          />
          <p
            className="text-[30px] sm:text-[60px] text-white font-bold leading-[34px] sm:leading-[60px] mb-2"
            style={{
              letterSpacing: "-3%",
            }}
            dangerouslySetInnerHTML={{ __html: imageText1 }}
          ></p>
          <p
            className="text-[30px] sm:text-[60px]  font-bold leading-[34px] sm:leading-[60px] mb-2"
            style={{
              letterSpacing: "-3%",
            }}
          >
            {imageText2}
          </p>
        </div>
        <div className="w-full md:w-1/2 text-[#FFFFFF80] text-center md:text-left">
          <p
            className="innovation-paragraph text-[22px] sm:text-[30px] font-semibold mb-2  leading-[34px] sm:leading-[46px]"
            style={{
              letterSpacing: "-4%",
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </section>
  );
};

export default SectionWithImageAndText;
