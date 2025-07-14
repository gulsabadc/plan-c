import Image from "next/image";
import React from "react";
import founderBg from "../../assets/images/service-bg.png";
import porfessionalImage from "../../assets/images/Diagram.png";
import GlobalButton from "../Button";

const Porfessional = () => {
  return (
    <section
      className="w-full pt-[40px] sm:pt-[90px] pb-[40px] sm:pb-[110px] px-[30px] sm:px-[160px] relative z-10"
      style={{
        backgroundImage: `url(${founderBg.src})`,
        backgroundColor: "#002200",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-full mx-auto">
        <Image
          src={porfessionalImage}
          alt="porfessional"
          className="w-full h-auto max-h-[400px] sm:max-h-none object-contain"
          priority
        />
      </div>
      <div className="mt-[2rem] sm:mt-[4rem] flex justify-center">
        <GlobalButton variant="outlined" href="/contact">
          <span className="block sm:hidden">Talk to our expert</span>
          <span className="hidden sm:block">
            Talk to Our Product Strategy Expert
            <span className="ml-2"> →</span>
          </span>
        </GlobalButton>
      </div>
    </section>
  );
};

export default Porfessional;
