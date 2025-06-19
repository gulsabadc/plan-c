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

const Navbar = ({ variant = "black", currentPath }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bgClass = variant === "transparent" ? "bg-transparent" : "bg-black";

  return (
    <nav className="w-full py-[1.25rem] px-[2.5rem] bg-white flex items-center justify-between">
      <div className="flex"></div>
      {/* Desktop Nav */}
      <div className="nav-links flex justify-center gap-10">
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
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-lg${
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
      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
            font-size: 26px !important;
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
        .nav-link {
          color: white;
          font-weight: 500;
          position: relative;
          padding: 0 8px;
          text-decoration: none;
        }
        .nav-link.active {
          color: #c6ff4f;
          font-weight: 700;
        }
        .nav-link.active::after {
          content: "";
          display: block;
          height: 4px;
          background: #c6ff4f;
          border-radius: 2px;
          margin-top: 2px;
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
