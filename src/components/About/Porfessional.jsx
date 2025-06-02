import Image from "next/image";
import React from "react";
import founderBg from "../../assets/images/service-bg.png";
import porfessionalImage from "../../assets/images/Diagram.png";

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
        className="w-full h-full object-contain"
      />
    </section>
  );
};

export default Porfessional;
