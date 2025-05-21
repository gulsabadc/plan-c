"use client";
import { usePathname } from "next/navigation";
import TransparentNavbar from "./TransparentNavbar";
import BlackNavbar from "./BlackNavbar";

export default function ClientNavbarWrapper() {
  
  const pathname = usePathname();
  // Homepage is '' or '/' depending on Next.js version, so check both
  if (pathname === "/" || pathname === "") {
    return <TransparentNavbar />;
  }
  return <BlackNavbar />;
}
