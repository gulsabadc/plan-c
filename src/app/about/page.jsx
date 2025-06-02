import React from "react";
import Overview from "../../components/About/Overview";
import Process from "../../components/About/Process";
import Founder from "../../components/About/Founder";
import Porfessional from "../../components/About/Porfessional";

export default function About() {
  return (
    <div className="relative w-full ">
      <Overview />
      <Process />
      <Founder />
      <Porfessional />
    </div>
  );
}
