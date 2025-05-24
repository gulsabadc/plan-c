import React from "react";
import Image from 'next/image';
import Banner from '../components/Banner/Banner';
import Cards from '../components/Cards/Cards';
import Slider from '../components/Slider/Slider';
import Welcome from '../components/Welcome/Welcome';
import Services from '../components/Services/Services';
import Innovation from '../components/Innovation/Innovation';
import ChirpChecker from '../components/ChirpChecker/ChirpChecker';
import heroBg from '../assets/images/hero-bg.png';

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        {/* Background Image */}
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          priority
        />
        {/* Content on top */}
        <div className="relative z-10">
          <Banner />
          <Cards />
          <Slider />
        </div>
      </div>
      {/* Place cards just before the slider */}
      <Welcome />
      <Services />
      {/* <Innovation /> */}
      {/* <ChirpChecker /> */}
    </>
  );
}
