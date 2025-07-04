import React from "react";
import GlobalButton from "./Button";

interface SectionLayoutProps {
  iconOrImage: React.ReactNode;
  title: string;
  ShortTitle: string;
  description: string;
  children?: React.ReactNode;
  showLearnMoreButton?: boolean;
  learnMoreLink?: string;
  variant?: "filled" | "outlined";
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  variant,
  iconOrImage,
  title,
  description,
  children,
  showLearnMoreButton = false,
  learnMoreLink = "#",
  ShortTitle,
}) => {
  return (
    <section className="w-full py-[6.25rem] px-[10rem]  relative z-10">
      <div
        className={`max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-2 "
        }`}
      >
        <div className="w-full md:w-1/2">
          <div className="crystal  flex items-center justify-center mb-7">
            <div className=" crystal-float w-full h-full transform-gpu animate-crystal-float animate-crystal-spin">
              {iconOrImage}
            </div>
          </div>

          <h2
            className="font-bold text-white md:text-[60px]"
            style={{ lineHeight: "62px", letterSpacing: "-3%" }}
          >
            {title}
          </h2>
        </div>

        <div className="w-full md:w-1/2 text-[#D9D9D9] opacity-[50%]">
          <p
            className="text-[30px] font-semibold mb-1"
            style={{ letterSpacing: "-4%", lineHeight: "46px" }}
          >
            {ShortTitle}{" "}
            <span className="">{description}</span>
          </p>
         
        </div>
      </div>
      <div className="flex flex-col items-center w-full ">
        <div className="w-full  flex flex-col items-center ">{children}</div>
        {showLearnMoreButton && (
          <div className="m-0 w-full flex justify-center ">
            <GlobalButton variant={variant} href={learnMoreLink}>
              Learn More
              <span className="ml-2"> →</span>
            </GlobalButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionLayout;
