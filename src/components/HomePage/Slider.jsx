"use client";
import React from "react";

const sliderText = [
  "TRUSTED BY 10+ BRAND",
  "MEDIUM TO LARGE DIGITAL HEALTH COMPANIES",
  "SOFTWARE-BASED STARTUPS",
  "LARGE PAYER ORGANIZATIONS",
  "MID-SIZE BILLING VENDOR",
  "MID-SIZE CAPTURE",
];

const marqueeAnimation = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const Slider = () => (
  <section className="w-full bg-black overflow-hidden p-0 m-0 min-h-2 sm:min-h-12  relative z-20">
    <style>{marqueeAnimation}</style>
    <div
      className="whitespace-nowrap inline-block font-semibold  text-[rgba(255, 255, 255, 0.5)] tracking-wide py-[22px]  animate-marquee"
      style={{ animation: "marquee 30s linear infinite" }}
    >
      {sliderText.map((text, idx) => (
        <span
          key={idx}
          className={`mx-10 ${idx === 0 ? "text-[#e6ff47]" : "text-gray-400"}`}
        >
          {text}
        </span>
      ))}
      {/* Repeat for smooth loop */}
      {sliderText.map((text, idx) => (
        <span
          key={idx + sliderText.length}
          className={`mx-10 ${idx === 0 ? "text-[#e6ff47]" : "text-gray-400"}`}
        >
          {text}
        </span>
      ))}
    </div>
  </section>
);

export default Slider;
