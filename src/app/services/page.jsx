import React from "react";
import SectionOne from '../../components/Services/SectionOne'
import SectionTwo from '../../components/Services/SectionTwo'
import SectionThree from '../../components/Services/SectionThree'


export default function Services() {
  return (
    <div className="relative w-full ">
      <SectionOne />
      <SectionTwo/>
      <SectionThree/>
    </div>
  );
}
