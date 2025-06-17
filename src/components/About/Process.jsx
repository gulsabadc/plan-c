import React from 'react'
import processCrystal from "../../assets/images/process-crystal.png";
import processDiagram from "../../assets/images/process-diagram.png";
import servicesBg from "../../assets/images/service-bg.png";
import SectionLayout from "../SectionLayout";
import Image from 'next/image';

const Process = () => {
    const title = "Our Process";
  const description =
    "adaptable approach to solving challenges. Our process is designed to ensure clarity, alignment, and execution at every stage.";
  const ShortTitle = "At Plan C, we take a structured, yet ";
  return ( 
     <div
      style={{
        backgroundImage: `url(${servicesBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionLayout
        iconOrImage={
          <img
            src={processCrystal.src}
            alt="process Icon"
            style={{ width: "250px", height: "250px" }}
          />
        }
        title={title}
        ShortTitle={ShortTitle}
        description={description}
        learnMoreLink="/services"
      >
        {/* List of services go here with styling */}
        <div className='mt-[5rem]'><Image src={processDiagram} alt="process" className="w-full" /></div>
      </SectionLayout>
    </div>
  )
}

export default Process