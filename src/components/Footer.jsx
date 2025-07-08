import React from "react";
import Image from "next/image";
import PlanCLogo from "../assets/images/PlanC.png";
import footerBgImage from "../assets/images/footer-bg.png";
import MovingBanner from "./MovingBanner";

const Footer = () => (
  <footer
    className=" py-12 px-4  relative z-10"
    style={{
      backgroundImage: `url(${footerBgImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-[90px] text-[#FEFFED]  py-[50px]">
      {/* Left Section */}
      <div className="flex-1 flex-col mr-1">
        <div
          className="text-[58px] font-bold mb-4"
          style={{
            lineHeight: "100%",
            letterSpacing: "-4%",
          }}
        >
          Let's Explore The Next Project Together.
        </div>
        <div className="mt-[3rem] flex items-center">
          <Image src={PlanCLogo} alt="Plan C Logo" width={132} height={36.27} />
        </div>
      </div>

      {/* Right Section - Contains links, separator, and copyright */}
      <div className="flex-1 flex-col mt-7">
        {/* Right Section - Columns */}
        <div
          className="flex flex-row mb-10 text-[26px] font-bold"
          style={{ letterSpacing: "-4%", lineHeight: "100%" }}
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-8 mr-[7rem]">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-8 ">
            <a href="/amiCredible" className="text-white hover:text-gray-300">
              AmICredible
            </a>
            <a href="/contact">Contact Us</a>
            
            
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-[2px] border-[#BFFF00]"></div>

        {/* Copyright */}
        <div
          className="text-left font-[400] text-lg mt-4"
          style={{ letterSpacing: "-4%", lineHeight: "100%" }}
        >
          ©PLANC 2025 ALL RIGHT RESERVED
        </div>
      </div>
    </div>
    <MovingBanner />
  </footer>
);

export default Footer;
