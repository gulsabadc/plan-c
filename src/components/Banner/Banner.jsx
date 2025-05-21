import React from "react";

const Banner = () => (
  <section className="w-full flex flex-col items-center justify-start p-0">
    <div className="mt-[6rem] relative z-20 flex flex-col items-center justify-center w-full pt-16 pb-8 px-4 text-center text-white">
      <div
        className="inline-block bg-[#e6ff47]/10 text-[#c6ff00] border border-[#e6ff47] rounded-full px-6 py-1.5 mb-6 text-center"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          fontStyle: "italic",
          fontSize: "24px",
          lineHeight: "100%",
          letterSpacing: "0",
        }}
      >
        Innovative Strategy & AI Solutions
      </div>
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight m-0 text-center">
        Empowering{" "}
        <span
          className="text-[#1ed760]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "54px",
            lineHeight: "59px",
            letterSpacing: "-4%",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          Product Growth
        </span>{" "}
        and
        <br />
        <span
          className="text-[#e6ff47]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "54px",
            lineHeight: "59px",
            letterSpacing: "-4%",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          Restoring Trust
        </span>{" "}
        in Information
      </h1>
      <div
        className="mt-[4rem] p-[2px] rounded-[6px]"
        style={{
          background:
            "linear-gradient(93.34deg, #FEFFED 0%, rgba(255,255,255,0) 96.79%)",
          display: "inline-block",
        }}
      >
        <button
          className="bg-gradient-to-r from-[#5E79FF] to-[#3755ED] text-white rounded-[6px] font-semibold text-lg shadow-md hover:scale-105 transition-transform px-[80px] py-[12px] w-full h-full"
          style={{
            border: "none",
            background:
              "linear-gradient(86.04deg, #5E79FF 27.69%, #3755ED 96.06%)",
          }}
        >
          Get in Touch &rarr;
        </button>
      </div>
    </div>
  </section>
);

export default Banner;
