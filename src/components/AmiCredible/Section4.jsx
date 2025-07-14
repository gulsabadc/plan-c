import React from "react";
import Image from "next/image";
import whyItMatterIcon from "../../assets/images/why_it_matter.png";
import whyItMatterIconMobile from "../../assets/images/why_it_matters_mobile.png";
import serviceBg from "../../assets/images/service-bg.png";
import GlobalButton from "../Button";

const Section4 = () => (
  <section
    className="w-full py-10 px-4 md:py-[6.25rem] md:px-[10rem] flex flex-col items-center relative"
    style={{
      backgroundImage: `url(${serviceBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Heading */}
    <h2
      className="text-white text-[24px] md:text-[58px] font-bold mb-6 text-center leading-[34px] sm:leading-[50px]"
      style={{ letterSpacing: "-4%" }}
    >
      Why It Matters
    </h2>
    {/* Description */}
    <p
      className="text-[#FFFFFF80] innovation-paragraph text-[18px] md:text-[30px] text-center mb-12 leading-[28px] sm:leading-[46px]"
      style={{ letterSpacing: "-4%" }}
    >
      In an age where misinformation spreads faster than ever—through social
      media posts, AI-generated content, and viral soundbites—AmiCredible
      provides a critical line of defense. Our platform empowers individuals to
      assess the credibility of statements, tweets, or claims with a single
      click, making truth more accessible and misinformation easier to
      challenge.
    </p>
    {/* Benefits List */}
    <div className="flex flex-col gap-4 mb-12">
      <Image
        src={whyItMatterIcon}
        alt="Promotes critical thinking"
        width={"100%"}
        height={"100%"}
        className="hidden md:block mb-4 w-[100%] h-[100%] object-cover"
      />
      <Image
        src={whyItMatterIconMobile}
        alt="Promotes critical thinking"
        width={"100%"}
        height={"100%"}
        className="block md:hidden mb-4 w-[100%] h-[100%]"
      />
    </div>
    {/* Call to Action */}
    <p
      className="text-white text-[22px] md:text-[38px] font-semibold text-center mb-6 leading-[34px] sm:leading-[100%]"
      style={{ letterSpacing: "-4%" }}
    >
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
