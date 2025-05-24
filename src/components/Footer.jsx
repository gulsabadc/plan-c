import React from "react";
import Image from "next/image";
import PlanCLogo from "../assets/images/PlanC.png"; 
import footerBgImage from "../assets/images/footer-bg.png";

const Footer = () => (
  <footer
    className="bg-[#011706] text-white py-12 px-4 md:px-8 lg:px-16 relative z-10"
    style={{
      backgroundImage: `url(${footerBgImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-8">
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
        <div className="flex flex-row mb-5">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 mr-[7rem]">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact Us
            </a>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4 ">
            <a href="#" className="text-white hover:text-gray-300">
              ChirpChecker
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Terms & Conditions
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-[#BFFF00]"></div>

        {/* Copyright */}
        <div className="text-left text-gray-300 text-sm mt-4">
          ©PLANC 2025 ALL RIGHT RESERVE
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
