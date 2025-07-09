import Image from "next/image";
import React from "react";
import founderBg from "../../assets/images/service-bg.png";
import porfessionalImage from "../../assets/images/Diagram.png";
import GlobalButton from "../Button";

const Porfessional = () => {
  return (
    <section
      className="w-full pt-[90px] pb-[110px] px-[160px] relative z-10"
      style={{
        backgroundImage: `url(${founderBg.src})`,
        backgroundColor: "#002200",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src={porfessionalImage}
        alt="porfessional"
        className="w-full h-full"
      />
      <div className="mt-[4rem] flex justify-center">
        <GlobalButton variant="outlined" href="/contact">
          Talk to Our Product Strategy Expert
          <span className="ml-2"> →</span>
        </GlobalButton>
      </div>
    </section>
  );
};

export default Porfessional;
