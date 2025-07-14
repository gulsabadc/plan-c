import React from "react";
import Image from "next/image";
import howItWorksImg from "../../assets/images/how_it_works.png";
import howItWorksImgMobile from "../../assets/images/how_it_works_mob.png";
import welcomeBg from "../../assets/images/welcome-bg.png";

const Section3 = () => (
  <section
    className="w-full py-10 px-4 md:py-[6.25rem] md:px-[10rem] flex flex-col items-center relative z-10 m-0"
    style={{
      backgroundImage: `url(${welcomeBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Heading */}
    <h2
      className="text-white text-[24px] md:text-[58px] font-bold mb-6 text-center leading-[34px] sm:leading-[50px]"
      style={{ letterSpacing: "-4%" }}
    >
      How It Works
    </h2>
    {/* Description */}
    <p
      className="text-[#FFFFFF80] innovation-paragraph text-[18px] md:text-[30px] text-center mb-12 leading-[28px] sm:leading-[46px]"
      style={{ letterSpacing: "-4%" }}
    >
      AmiCredible is powered by smart AI that reads and understands the meaning of
       a sentence, much like a human would. When someone submits a statement,
      the system breaks it down to identify key facts or claims. It then checks
      those claims against reliable sources—like trusted news, science articles,
      or fact-checking sites.
    </p>
    {/* How it works image */}
    <div className="relative w-full flex justify-center">
      <div className="relative w-[100%] h-[100%]">
        <Image
          src={howItWorksImg}
          alt="How AmiCredible Works"
          className="hidden md:block w-[100%] h-[100%]"
        />
        <Image
          src={howItWorksImgMobile}
          alt="How AmiCredible Works"
          className="block md:hidden w-[100%] h-[100%]"
        />
      </div>
    </div>
  </section>
);

export default Section3;
