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
    <section className="pt-2 items-center p-10 text-[#cccccc] md:flex-row md:items-start  md:p-16">
      <div className="flex ">
        <div className="w-1/2 flex-1 mb-6  md:w-80 md:flex-shrink-0 md:mb-0">
          <div className="">{iconOrImage}</div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
        </div>
        <div className="flex-1 w-1/2 flex flex-col items-center md:items-start">
          <div className="w-full mb-6 md:mb-10  md:text-left">
            <p
              className="text-[30px] font-semibold mb-1 text-[#D9D9D9]"
              style={{ letterSpacing: "-4%" }}
            >
              {ShortTitle}
            </p>
            <p
              className="text-[30px] font-semibold mb-4 md:mb-6 text-[#D9D9D9] opacity-[50%]"
              style={{ letterSpacing: "-4%" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full ">
        <div className="w-full mb-6 flex flex-col items-center ">
          {children}
        </div>
        {showLearnMoreButton && (
          <div className="mt-2 w-full flex justify-center ">
            <GlobalButton variant={variant} href={learnMoreLink}>
              Learn More →{" "}
            </GlobalButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionLayout;
