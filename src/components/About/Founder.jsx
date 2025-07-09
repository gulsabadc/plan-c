import React from "react";
import Image from "next/image";
import founderImage from "../../assets/images/founder.png";
import founderCrystal from "../../assets/images/founder-crystal.png";
import founderBg from "../../assets/images/welcome-bg.png";

const Founder = () => {
  return (
    <section
      className="w-full pt-[40px] sm:pt-[90px] sm:pb-[110px] pb-[0px]  px-[30px] sm:px-[160px] relative z-10"
      style={{
        backgroundImage: `url(${founderBg.src})`,
        backgroundColor: "#002200", // Dark green fallback
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Top section with crystal and title */}
        <div className="mb-12 sm:mb-12">
          <div className="mb-6 sm:mb-6 flex justify-center sm:justify-start">
            <Image
              src={founderCrystal}
              alt="Crystal"
              width={100}
              height={100}
              className="crystal-float transform-gpu animate-crystal-float animate-crystal-spin w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]"
            />
          </div>

          <h2 className="text-[30px] sm:text-[60px] font-bold text-white mb-6 text-center sm:text-left">
            Founder & CEO
          </h2>
        </div>

        {/* Content section with text and image */}
        <div className="flex flex-col md:flex-row items-center sm:items-start gap-8">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 text-center sm:text-left">
            <div
              className="text-[22px] sm:text-[30px] font-semibold leading-[34px] sm:leading-[46px]"
              style={{ letterSpacing: "-4%" }}
            >
              <p className="mb-6 text-[#FFFFFF80] leading-[28px] sm:leading-[34px]">
                <span className="text-white">Daniel A. Nottingham is a</span>{" "}
                performance-driven executive with over{" "}
                <span className="text-[#BFFF00]">15 years</span> of healthcare
                product technology leadership experience.
              </p>
              <br />
              <p className="mb-4 text-[#FFFFFF80] leading-[28px] sm:leading-[34px]">
                His strategic vision and hands-on approach have guided multiple
                healthcare organizations through periods of significant growth &
                transformation.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2 flex justify-center sm:justify-end">
            <div className="relative w-[300px] sm:w-[512px] h-[300px] sm:h-[566px] self-end ">
              <Image
                src={founderImage}
                alt="Daniel A. Nottingham"
                className="md:-translate-y-[8rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
