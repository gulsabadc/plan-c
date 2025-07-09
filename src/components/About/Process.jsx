import React from "react";
import processCrystal from "../../assets/images/process-crystal.png";
import processDiagram from "../../assets/images/process-diagram.png";
import processDiagramMobile from "../../assets/images/process-diagram-mob.png";
import servicesBg from "../../assets/images/service-bg.png";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

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
        iconOrImage={<img src={processCrystal.src} alt="process Icon" />}
        title={title}
        ShortTitle={ShortTitle}
        description={description}
        learnMoreLink="/services"
      >
        {/* List of services go here with styling */}
        <div className="mt-[5rem]">
          <h2 className="text-white text-[22px] sm:text-[36px] font-semibold mb-1 text-center mb-[2rem] sm:mb-[4rem]">
            Strategic Consulting Process
          </h2>
          <div>
            <div className="hidden md:block">
              <Image src={processDiagram} alt="process" className="w-full" />
            </div>
            <div className="block md:hidden">
              <Image
                src={processDiagramMobile}
                alt="process mobile"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Process;
