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
      className="flex justify-center items-center h-full px-[160px] py-[90px]"
      style={sectionStyle}
    >
      <div className=" text-center ">
        <h2 className="text-white text-3xl md:text-[60px] font-bold mb-[100px]">
          Who We Help
        </h2>
        <div className="flex flex-col md:flex-row justify-space-between  gap-[15rem]">
          {/* Startups */}
          <div className="flex flex-col items-center gap-10">
            <Image src={rocketImg} alt="Startups" width={270} height={270} />
            <span className="text-white text-[44px] font-medium mt-4">
              Startups
            </span>
          </div>
          {/* Healthcare Tech Firms */}
          <div className="flex flex-col items-center gap-10">
            <Image
              src={heartImg}
              alt="Healthcare Tech Firms"
              width={270}
              height={270}
            />
            <span className="text-white text-[44px] font-medium mt-4 text-center">
              Healthcare
              <br />
              Tech Firms
            </span>
          </div>
          {/* SaaS Companies */}
          <div className="flex flex-col items-center gap-10">
            <Image
              src={gearImg}
              alt="SaaS Companies"
              width={270}
              height={270}
            />
            <span className="text-white text-[44px] font-medium mt-4 text-center">
              SaaS
              <br />
              Companies
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
