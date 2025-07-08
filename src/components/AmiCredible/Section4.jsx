import React from "react";
import Image from "next/image";
import whyItMatterIcon from "../../assets/images/why_it_matter.png";
import serviceBg from "../../assets/images/service-bg.png";
import GlobalButton from "../Button";

const Section4 = () => (
  <section
    className="w-full py-[90px] px-[160px] flex flex-col items-center relative"
    style={{
      backgroundImage: `url(${serviceBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Heading */}
    <h2
      className="text-white text-[58px] font-bold mb-[2.5rem] text-center"
      style={{ lineHeight: "60px", letterSpacing: "-4%" }}
    >
      Why It Matters
    </h2>
    {/* Description */}
    <p
      className="text-[#FFFFFF80] text-[30px]  text-center mb-[3.5rem]"
      style={{ lineHeight: "46px", letterSpacing: "-4%" }}
    >
      <span className="text-[#FFFFFF]">
        In an age where misinformation spreads faster than ever—through social
        media{" "}
      </span>
      posts, AI-generated content, and viral soundbites—AmiCredible provides a
      critical line of defense. Our platform empowers individuals to assess the
      credibility of statements, tweets, or claims with a single click, making
      truth more accessible and misinformation easier to challenge.
    </p>
    {/* Benefits List */}
    <div className="flex flex-col gap-4 mb-[5rem]">
      <Image
        src={whyItMatterIcon}
        alt="Promotes critical thinking"
        width={"100%"}
        height={"100%"}
        className="mr-3"
      />
    </div>
    {/* Call to Action */}
    <p className="text-white text-[39px] font-semibold text-center mb-6">
      Join the movement for truth. Learn how AmiCredible works!
    </p>
    <GlobalButton
      variant="outlined"
      href="https://amicredible.ai"
      target="_blank"
    >
      Explore AmiCredible →
    </GlobalButton>
  </section>
);

export default Section4;
