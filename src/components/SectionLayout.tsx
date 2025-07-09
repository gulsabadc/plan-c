import React from "react";
import GlobalButton from "./Button";

interface SectionLayoutProps {
  iconOrImage: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
  showLearnMoreButton?: boolean;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  iconOrImage,
  title,
  description,
  children,
  showLearnMoreButton = false,
}) => {
  return (
    <section className="w-full py-[30px] sm:py-[6.25rem] px-[30px] sm:px-[10rem]  relative z-10">
      <div
        className={`max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-2 "
        }`}
      >
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
          <div className="crystal  flex items-center justify-center mb-7">
            <div className="crystal-float w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] transform-gpu animate-crystal-float animate-crystal-spin">
              {iconOrImage}
            </div>
          </div>

          <h2
            className="font-bold text-white text-[30px] sm:text-[60px] leading-[100%] sm:leading-[60px] mb-5"
            style={{ letterSpacing: "-3%" }}
          >
            {title}
          </h2>
        </div>

        <div className="w-full md:w-1/2 w-full md:w-1/2 text-[#FFFFFF80] text-center md:text-left">
          <p
            className="innovation-paragraph text-[22px] sm:text-[30px] font-semibold mb-2 leading-[28px] sm:leading-[46px]"
            style={{ letterSpacing: "-3%" }}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full ">
        <div className="w-full  flex flex-col items-center ">{children}</div>
        {showLearnMoreButton && (
          <div className="m-0 w-full flex justify-center ">
            <GlobalButton variant={"outlined"} href={"/services"}>
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
