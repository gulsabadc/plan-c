import React from "react";
import Image from "next/image";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import Slider from "../components/Slider/Slider";
import Welcome from "../components/Welcome/Welcome";
import Services from "../components/Services/Services";
import Innovation from "../components/Innovation/Innovation";
import heroBg from "../assets/images/hero-bg.png";
import textureImage from "../assets/images/texture.png";

export default function Home() {
  return (
    <>
      {/* Texture overlay */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-[1] mix-blend-multiply opacity-15"
        style={{
          backgroundImage: `url(${textureImage.src})`,
          backgroundRepeat: 'repeat',
        }}
      ></div>
      
      <div className="relative w-full z-[2] m-0 p-0">
        {/* Background Image */}
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        {/* Content on top */}
        <div className="relative z-[3] m-0 p-0">
          <Banner />
          <Cards />
          <Slider />
        </div>
      </div>
      {/* Place cards just before the slider */}
      <Welcome />
      <Services />
      <Innovation />
    </>
  );
}


