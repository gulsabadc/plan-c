'use client';
import React from 'react';

const sliderText = [
  'TRUSTED BY 10+ BRAND',
  'MEDIUM TO LARGE DIGITAL HEALTH COMPANIES',
  'SOFTWARE-BASED STARTUPS',
  'LARGE PAYER ORGANIZATIONS',
  'MID-SIZE BILLING VENDOR',
  'MID-SIZE CAPTURE',
];

const marqueeAnimation = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const Slider = () => (
  <section className="w-full bg-black overflow-hidden p-0 m-0 min-h-12 border-y-2 border-[#222] relative z-20">
    <style>{marqueeAnimation}</style>
    <div
      className="whitespace-nowrap inline-block font-bold text-base text-white tracking-wide py-3 animate-marquee"
      style={{ animation: 'marquee 18s linear infinite' }}
    >
      {sliderText.map((text, idx) => (
        <span key={idx} className={`mx-10 ${idx === 0 ? 'text-[#e6ff47]' : 'text-white'}`}>{text}</span>
      ))}
      {/* Repeat for smooth loop */}
      {sliderText.map((text, idx) => (
        <span key={idx + sliderText.length} className={`mx-10 ${idx === 0 ? 'text-[#e6ff47]' : 'text-white'}`}>{text}</span>
      ))}
    </div>
  </section>
);

export default Slider; 