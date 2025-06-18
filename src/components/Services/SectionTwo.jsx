import Image from "next/image";
import React from "react";
import sectionImg from "../../assets/images/section02.png";
import texture from "../../assets/images/texture.png";

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
      style={sectionStyle }
    >
      <Image src={sectionImg} />
    </div>
  );
};

export default SectionTwo;
