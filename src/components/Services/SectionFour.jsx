import React from "react";
import texture from "../../assets/images/texture.png";
import crystal from "../../assets/images/fourth-crystal.png";
import Image from "next/image";
import GlobalButton from "../Button";

const sectionStyle = {
  backgroundImage: `url(${texture.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center top",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#05210A",
  backgroundBlendMode: "multiply",
};

const SectionFour = () => {
  return (
    <section
      className="pt-[6.875rem] pb-[8.75rem] px-[10rem]"
      style={sectionStyle}
    >
      <div className="max-w-[100%] mx-auto flex flex-col md:flex-row items-center md:items-start gap-7
      
      ">
        <div className="flex flex-col items-center md:items-start flex-1">
          <Image
            src={crystal}
            alt="Success Highlights"
            width={12.5 * 16}
            height={12.5 * 16}
            className="mb-6"
          />
          <h2 className="text-white text-3xl md:text-[3.75rem] font-bold text-center md:text-left leading-tight">
            Success
            <br />
            Highlights
          </h2>
        </div>
        {/* Right: Text and Button */}
        <div className="flex-1 text-[1.875rem] flex flex-col items-center md:items-start">
          <p
            className="text-white font-medium text-center md:text-left max-w-xl"
            style={{ lineHeight: "2.875rem", letterSpacing: "-4%" }}
          >
            <span className="font-bold">
              Helped launch
              <span className="text-[#C6FF4F]"> 6 healthcare technology</span>
            </span>
          </p>
          <p
            className="text-[#FFFFFF80] mb-10"
            style={{ lineHeight: "2.875rem", letterSpacing: "-4%" }}
          >
            startups. Led development of industry-first workforce management
            &amp; AI-driven healthcare tools. Guided major SaaS firms in
            refining product-market fit.
          </p>
          <GlobalButton variant="filled">
            Need help? Let&apos;s chat! <span className="ml-2">→</span>
          </GlobalButton>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
