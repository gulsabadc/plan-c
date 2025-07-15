import React from "react";
import GlobalButton from "../Button";

const Banner = () => (
  <section className="w-full flex flex-col items-center justify-start p-0">
    <div className="mt-[6rem] relative z-20 flex flex-col items-center justify-center w-full pt-16 pb-8 px-4 text-center text-white">
      <div
        className="inline-block text-[18px] sm:text-[24px]   border border-[#FFFFFFF] bg-[#FFFFFF]/10 rounded-full px-6 py-2 mb-6 text-center"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          fontStyle: "italic",
          lineHeight: "100%",
          letterSpacing: "0",
        }}
      >
        Innovative Strategy & AI Solutions
      </div>
      <h1
        className="font-bold text-3xl sm:text-4xl md:text-[54px] leading-tight m-0 text-center leading-[34px] sm:leading-[59px]"
        style={{ letterSpacing: "-4%" }}
      >
        Empowering Product Growth &
        <br />
        Restoring Trust in Information
      </h1>
      <div className="mt-[4rem]">
        <GlobalButton variant="outlined" href="/contact">
          Get in Touch
          <span className="ml-2"> →</span>
        </GlobalButton>
      </div>
    </div>
  </section>
);

export default Banner;
