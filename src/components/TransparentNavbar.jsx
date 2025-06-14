"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import planCLogo from "../assets/images/PlanC.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

const TransparentNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-transparent transition-colors duration-300 flex justify-between items-center px-8 pt-[2rem] text-white font-normal text-[26px] shadow-none">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={planCLogo}
            alt="PlanC Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="nav-links text-[26px] flex gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white font-bold hover:text-[#1ed760] transition-colors text-[26px]"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div
        className="hamburger hidden flex-col cursor-pointer ml-4 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-[30px] h-1 bg-white my-1 rounded"></span>
        <span className="w-[30px] h-1 bg-white my-1 rounded"></span>
        <span className="w-[30px] h-1 bg-white my-1 rounded"></span>
      </div>
      {menuOpen && (
        <div className="mobile-menu absolute top-full right-0 bg-black/70 shadow-lg rounded-b-lg p-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white font-bold text-[26px]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
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

export default TransparentNavbar;
