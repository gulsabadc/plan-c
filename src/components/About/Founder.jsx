import React from "react";
import Image from "next/image";
import founderImage from "../../assets/images/founder.png";
import founderCrystal from "../../assets/images/founder-crystal.png";
import founderBg from "../../assets/images/welcome-bg.png";

const Founder = () => {
  return (
    <section
      className="w-full pt-[90px] pb-[110px] px-[160px] relative z-10"
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
        <div className="mb-12">
          <div className="mb-6">
            <Image
              src={founderCrystal}
              alt="Crystal"
              width={200}
              height={200}
              className="crystal-float transform-gpu animate-crystal-float animate-crystal-spin"
            />
          </div>

          <h2 className="text-[60px] font-bold text-white mb-6">
            Founder & CEO
          </h2>
        </div>

        {/* Content section with text and image */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2">
            <div
              className="text-[30px] font-semibold]"
              style={{ lineHeight: "46px", letterSpacing: "-4%" }}
            >
              <p className="mb-6 text-[#FFFFFF80] ">
                <span className="text-white">Daniel A. Nottingham is a</span>{" "}
                performance-driven executive with over{" "}
                <span className="text-[#BFFF00]">15 years</span> of healthcare
                product technology leadership experience.
              </p>
              <br />
              <p className="mb-4 text-[#FFFFFF80] ">
                His strategic vision and hands-on approach have guided multiple
                healthcare organizations through periods of significant growth &
                transformation.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2 flex justify-end">
            <div className="relative w-[512px] h-[566px] self-end mt-auto">
              <Image
                src={founderImage}
                alt="Daniel A. Nottingham"
                className="-translate-y-[8rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
