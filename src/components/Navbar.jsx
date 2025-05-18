"use client";
import React, { useState } from "react";
import Image from "next/image";
import planCLogo from "../assets/images/PlanC.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

const Navbar = ({ variant = "black" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bgClass = variant === "transparent" ? "bg-transparent" : "bg-black";

  return (
    <nav
      className={`top-0 left-0 z-50 transition-colors duration-300 flex justify-between items-center px-8 py-6 ${bgClass} text-white font-normal text-[1.1rem] shadow-md relative`}
    >
      <div className="flex">
        <Image
          src={planCLogo}
          alt="PlanC Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
      {/* Desktop Nav */}
      <div className="nav-links flex justify-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white font-bold hover:text-[#1ed760] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Hamburger for mobile */}
      <div
        className="hamburger hidden flex-col cursor-pointer ml-4 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-[30px] h-1 bg-white my-1 rounded"></span>
        <span className="w-[30px] h-1 bg-white my-1 rounded"></span>
        <span className="w-[30px] h-1 bg-white my-1 rounded"></span>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`mobile-menu absolute top-full right-0 ${
            variant === "transparent" ? "bg-black/70" : "bg-black"
          } shadow-lg rounded-b-lg p-6 flex flex-col gap-6 md:hidden`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white font-bold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
