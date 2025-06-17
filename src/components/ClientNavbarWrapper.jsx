"use client";
import { usePathname } from "next/navigation";
import TransparentNavbar from "./TransparentNavbar";
import BlackNavbar from "./BlackNavbar";

// IMPORTANT: Use this ClientNavbarWrapper in your layout/app to ensure active link highlighting works correctly.
// Do NOT use TransparentNavbar or BlackNavbar directly.

export default function ClientNavbarWrapper() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  // Homepage is '' or '/' depending on Next.js version, so check both
  if (pathname === "/" || pathname === "") {
    return <TransparentNavbar currentPath={pathname} />;
  }
  return <BlackNavbar currentPath={pathname} />;
}
