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
      className="py-10 px-4 md:py-[6.25rem] md:px-[10rem]"
      style={sectionStyle}
    >
      <div
        className="max-w-[100%] mx-auto flex flex-col md:flex-row items-center md:items-start gap-7
      
      "
      >
        <div className="flex flex-col items-center md:items-start flex-1">
          <Image
            src={crystal}
            alt="Success Highlights"
            width={100}
            height={100}
            className="crystal-float transform-gpu animate-crystal-float animate-crystal-spin mb-4 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]"
          />
          <h2 className="text-white text-[24px] md:text-[60px] font-bold text-center md:text-left leading-tight">
            Success <br className="hidden md:block" />
            Highlights
          </h2>
        </div>
        {/* Right: Text and Button */}
        <div className="flex-1 text-[18px] md:text-[30px] flex flex-col items-center md:items-start">
          <p
            className="font-medium text-center md:text-left  text-[#FFFFFF80] mb-10 leading-[28px] sm:leading-[46px]"
            style={{ letterSpacing: "-3%" }}
          >
            <span className="font-bold ">
              Helped launch
              <span className="text-white"> 6 healthcare technology </span>
            </span>
            startups. Led development of industry-first workforce management
            &amp; AI-driven healthcare tools. Guided major SaaS firms in
            refining product-market fit.
          </p>
          
          <GlobalButton variant="outlined" href="/contact">
            <span className="inline sm:hidden">Need help?</span>
            <span className="hidden sm:inline">
              Need help? Let&apos;s chat! <span className="ml-2">→</span>
            </span>
          </GlobalButton>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
