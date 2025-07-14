import React from "react";
import SectionOne from "../../components/Services/SectionOne";
import SectionTwo from "../../components/Services/SectionTwo";
import SectionThree from "../../components/Services/SectionThree";
import SectionFour from "../../components/Services/SectionFour";

export default function Services() {
  return (
    <div className="relative w-full mt-[6rem]">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
