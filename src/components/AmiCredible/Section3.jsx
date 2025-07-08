import React from "react";
import Image from "next/image";
import howItWorksImg from "../../assets/images/how_it_works.png";
import welcomeBg from "../../assets/images/welcome-bg.png";

const Section3 = () => (
  <section
    className="w-full pt-[90px] pb-[110px] px-[10rem] flex flex-col items-center relative z-10 m-0"
    style={{
      backgroundImage: `url(${welcomeBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Heading */}
    <h2
      className="text-white text-[58px] font-bold mb-6 text-center"
      style={{ lineHeight: "50px", letterSpacing: "-4%" }}
    >
      How It Works
    </h2>
    {/* Description */}
    <p
      className="text-[#FFFFFF80] text-[30px] text-center mb-12"
      style={{ lineHeight: "46px", letterSpacing: "-4%" }}
    >
      <span className="text-[#FFFFFF]">
        AmiCredible is powered by smart AI that reads and understands the
        meaning of {" "}
      </span>
       a sentence, much like a human would. When someone submits a statement,
      the system breaks it down to identify key facts or claims. It then checks
      those claims against reliable sources—like trusted news, science articles,
      or fact-checking sites.
    </p>
    {/* How it works image */}
    <div className="relative w-full flex justify-center">
      <div className="relative w-[900px] h-[600px]">
        <Image
          src={howItWorksImg}
          alt="How AmiCredible Works"
          // fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  </section>
);

export default Section3;
