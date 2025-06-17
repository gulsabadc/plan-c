"use client";
import React from "react";

const bannerText = "LET'S WORK TOGETHER  ".repeat(20);

export default function MovingBanner() {
  return (
    <div className="moving-banner-outer">
      <div className="moving-banner-inner">
        <span className="moving-banner-text">{bannerText}</span>
      </div>
      <style jsx>{`
        .moving-banner-outer {
          width: 100vw;
          overflow: hidden;
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 20;
          pointer-events: none;
          background: #36453999;
          display: flex;
          justify-content: center;
        }
        .moving-banner-inner {
          display: flex;
          align-items: center;
          /* Only as wide as the text, so it can be centered */
          animation: moveBanner 80s linear infinite;
          transform: skewY(0deg) translateY(-8px);
        }
        .moving-banner-text {
          display: inline-block;
          font-size: 40px;
          text-align: center;
          font-weight: 700;
          color: #bfff00;
          letter-spacing: 2px;
          white-space: nowrap;
          font-family: inherit;
          text-shadow: 0 2px 8px #000a;
        }
        @keyframes moveBanner {
          0% {
            transform: translateX(0) skewY(0deg) translateY(-8px);
          }
          100% {
            transform: translateX(-50%) skewY(0deg) translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}
