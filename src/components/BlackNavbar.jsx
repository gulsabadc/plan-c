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

function normalizePath(path) {
  if (!path) return "/";
  return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
}

const BlackNavbar = ({ currentPath }) => {
  console.log("currentPath", normalizePath(currentPath));

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full top-0 left-0 z-50 bg-black transition-colors duration-300 flex justify-between items-center px-8 py-6 text-white font-normal text-[1.1rem] shadow-md relative">
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
            className={`nav-link${
              normalizePath(currentPath) === normalizePath(link.href)
                ? " active"
                : ""
            }`}
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
        <div className="mobile-menu absolute top-full right-0 bg-black shadow-lg rounded-b-lg p-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-[26px]${
                normalizePath(currentPath) === normalizePath(link.href)
                  ? " active"
                  : ""
              }`}
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
            display: flex !important;a
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
        .nav-link {
          color: white;
          font-weight: 500;
          position: relative;
          padding: 0 8px;
          text-decoration: none;
        }
       
      `}</style>
    </nav>
  );
};

export default BlackNavbar;
