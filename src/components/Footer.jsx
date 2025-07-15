"use client";

import React from "react";
import Image from "next/image";
import PlanCLogo from "../assets/images/PlanC.png";
import footerBgImage from "../assets/images/footer-bg.png";
import MovingBanner from "./MovingBanner";

const Footer = () => (
  <footer
    className="pt-12 px-4 relative z-10"
    style={{
      backgroundImage: `url(${footerBgImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-[90px] text-[#FEFFED] py-[50px] footer-content">
      {/* Left Section */}
      <div className="flex-1 flex-col mr-1 footer-left">
        <div className="footer-logo flex justify-center md:justify-start mb-6">
          <Image src={PlanCLogo} alt="Plan C Logo" width={132} height={36.27} />
        </div>
        <div
          className="footer-heading text-[34px] md:text-[58px] font-bold mb-4 text-center md:text-left"
          style={{
            lineHeight: "100%",
            letterSpacing: "-4%",
          }}
        >
          Let's Explore The Next Project Together.
        </div>
      </div>
      {/* Right Section - Contains links, separator, and copyright */}
      <div className="flex-1 flex-col mt-7 footer-right">
        {/* Links - two columns on desktop, single column on mobile */}
        <div
          className="footer-links flex flex-col md:flex-row md:mb-10 items-center md:items-start gap-4 md:gap-0 text-[20px] md:text-[26px] font-bold"
          style={{ letterSpacing: "-4%", lineHeight: "100%" }}
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-8 md:mr-[7rem]">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4 md:gap-8">
            <a href="/contact">Contact Us</a>
            <a href="/amiCredible">AmiCredible</a>
          </div>
        </div>
        {/* Separator Line */}
        <div className="border-t border-[2px] border-[#BFFF00] w-full my-4"></div>
        {/* Copyright */}
        <div
          className="footer-copyright text-center font-[400] text-base md:text-lg mt-4 mb-[5rem] md:mb-0 sm:text-left"
          style={{ letterSpacing: "-4%", lineHeight: "100%" }}
        >
          ©PLAN C 2025 ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
    {/* <MovingBanner /> */}
    <style jsx>{`
      @media (max-width: 768px) {
        .footer-content {
          flex-direction: column !important;
          gap: 0 !important;
          padding: 0 !important;
        }
        .footer-logo {
          justify-content: center !important;
          margin-bottom: 2rem !important;
        }
        .footer-heading {
          text-align: center !important;
          // font-size: 1.5rem !important;
          margin-bottom: 2rem !important;
        }
        .footer-links {
          flex-direction: column !important;
          align-items: center !important;
          gap: 1.2rem !important;
          font-size: 1.1rem !important;
          margin-bottom: 2rem !important;
        }
        .footer-copyright {
          text-align: center !important;
          font-size: 0.9rem !important;
          margin-top: 2rem !important;
        }
        footer {
          background-image: none !important;
          background: #0a0e07 !important;
        }
      }
      @media (min-width: 769px) {
        .footer-links {
          flex-direction: row !important;
          align-items: flex-start !important;
          gap: 0 !important;
          font-size: 26px !important;
          margin-bottom: 2.5rem !important;
        }
        .footer-links > div {
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 2rem !important;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
