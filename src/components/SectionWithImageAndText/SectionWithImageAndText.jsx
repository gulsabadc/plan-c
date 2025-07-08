"use client";

import React from "react";
import Image from "next/image";

const SectionWithImageAndText = ({
  imageSrc,
  imageWidth,
  imageHeight,
  imageText1,
  imageText2,
  title,
  description,
  imageLeft = true,
  bgColor = "#00310A",
  backgroundImageSrc,
}) => {
  const sectionStyle = backgroundImageSrc
    ? {
        backgroundImage: `url(${backgroundImageSrc.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center top", // Changed to top alignment
        backgroundRepeat: "no-repeat",
        
      }
    : {};

  return (
    <section
      className={`w-full  py-[6.25rem] px-[10rem] relative z-10 m-0`}
      style={sectionStyle}
    >
      <div
        className={`max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 ${
          imageLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-1/2">
          <Image
            className="crystal-float transform-gpu animate-crystal-float animate-crystal-spin mb-4"
            src={imageSrc}
            alt={title || "Image"}
            width={imageWidth}
            height={imageHeight}
          />
          <p
            className="text-[60px] text-white font-bold"
            style={{
              lineHeight: "62px",
              letterSpacing: "-3%",
            }}
            dangerouslySetInnerHTML={{ __html: imageText1 }}
          ></p>
          <p
            className="text-[60px]  font-bold"
            style={{
              lineHeight: "62px",
              letterSpacing: "-3%",
            }}
          >
            {imageText2}
          </p>
        </div>
        <div className="w-full md:w-1/2 text-[#FFFFFF80] ">
          <p
            className="text-[30px] font-semibold mb-2 text-white"
            style={{
              lineHeight: "46px",
              letterSpacing: "-4%",
            }}
          >
            {title}{" "}
            <span
              className="text-[#FFFFFF80]"
              dangerouslySetInnerHTML={{ __html: description }}
            ></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionWithImageAndText;
