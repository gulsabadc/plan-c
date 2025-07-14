import Image from "next/image";
import React from "react";
import texture from "../../assets/images/texture.png";
import rocketImg from "@/assets/images/rocket.png";
import heartImg from "@/assets/images/heart.png";
import gearImg from "@/assets/images/gear.png";

const sectionStyle = {
  backgroundImage: `url(${texture.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center top",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#05210A",
  backgroundBlendMode: "multiply",
};

const SectionTwo = () => {
  return (
    <div
      className="flex justify-center items-center h-full py-10 px-4 md:py-[6.25rem] md:px-[10rem]"
      style={sectionStyle}
    >
      <div className="w-full max-w-md md:max-w-none text-center">
        <h2 className="text-white text-2xl md:text-[60px] font-bold mb-8 md:mb-[100px]">
          Who We Help
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[10rem]">
          {/* Startups */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-2 md:gap-10 bg-[#00374D] sm:bg-transparent rounded-[5px] px-6 py-4 md:px-8 md:py-10 w-full md:w-auto">
            <Image
              src={rocketImg}
              alt="Startups"
              width={64}
              height={64}
              className="md:w-[270px] md:h-[270px] w-16 h-16 max-w-[270px] max-h-[270px]"
            />
            <div className="flex flex-col justify-center  ">
              <span className="text-white text-base md:text-[44px] font-medium mt-0 md:mt-4">
                Startups
              </span>
            </div>
          </div>
          {/* Healthcare Tech Firms */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-2 md:gap-10 bg-[#00374D] sm:bg-transparent rounded-[5px] px-6 py-4 md:px-8 md:py-10 w-full md:w-auto">
            <Image
              src={heartImg}
              alt="Healthcare Tech Firms"
              width={64}
              height={64}
              className="md:w-[270px] md:h-[270px] w-16 h-16 max-w-[270px] max-h-[270px]"
            />
            <div className="flex flex-col justify-center leading-[46px]">
              <span
                className="text-white text-[24px] md:text-[44px] font-medium mt-0 md:mt-4"
                style={{ letterSpacing: "-4%" }}
              >
                Healthcare <br className="hidden md:block" />
                Tech Firms
              </span>
            </div>
          </div>
          {/* SaaS Companies */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-2 md:gap-10 bg-[#00374D] sm:bg-transparent rounded-[5px] px-6 py-4 md:px-8 md:py-10 w-full md:w-auto">
            <Image
              src={gearImg}
              alt="SaaS Companies"
              width={64}
              height={64}
              className="md:w-[270px] md:h-[270px] w-16 h-16 max-w-[270px] max-h-[270px] "
            />
            <div className="flex flex-col justify-center leading-[46px] ">
              <span
                className="text-white  md:text-[44px] font-medium mt-0 md:mt-4"
                style={{ letterSpacing: "-4%" }}
              >
                SaaS <br className="hidden md:block" />
                Companies
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
