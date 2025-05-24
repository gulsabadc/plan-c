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
  bgColor = "transparent",
  backgroundImageSrc,
}) => {
  const sectionStyle = backgroundImageSrc
    ? {
        backgroundImage: `url(${backgroundImageSrc.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <section
      className={`w-full py-16 px-4 md:px-8 lg:px-16 ${bgColor} relative z-10`}
      style={sectionStyle}
    >
      <div
        className={`max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 ${
          imageLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-1/2">
          <Image
            src={imageSrc}
            alt={title}
            width={imageWidth}
            height={imageHeight}
          />
          <p
            className="text-[60px] text-white font-bold"
            style={{
              lineHeight: "62px",
              letterSpacing: "-3%",
            }}
          >
            {imageText1}
          </p>
          <p
            className="text-[60px] text-[#BFFF00] font-bold"
            style={{
              lineHeight: "62px",
              letterSpacing: "-3%",
            }}
          >
            {imageText2}
          </p>
        </div>
        <div className="w-full md:w-1/2 text-white ">
          <h2
            className="text-[30px] font-semibold mb-4"
            style={{
              lineHeight: "46px",
              letterSpacing: "-4%",
            }}
          >
            {title}
          </h2>
          <p
            className="text-lg leading-relaxed text-[#FFFFFF80]"
            style={{
              lineHeight: "36px",
              letterSpacing: "-3%",
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </section>
  );
};

export default SectionWithImageAndText;
