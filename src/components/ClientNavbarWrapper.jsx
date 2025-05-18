"use client";
import { usePathname } from "next/navigation";
import TransparentNavbar from "./TransparentNavbar";
import BlackNavbar from "./BlackNavbar";

export default function ClientNavbarWrapper() {
  
  const pathname = usePathname();
  console.log(pathname);
  // Homepage is '' or '/' depending on Next.js version, so check both
  if (pathname === "/" || pathname === "") {
    console.log("TransparentNavbar");
    return <TransparentNavbar />;
  }
  return <BlackNavbar />;
}
