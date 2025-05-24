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
    <section className="flex flex-col items-center p-10 bg-[#0a1f0a] text-[#cccccc] md:flex-row md:items-start md:gap-10 md:p-16">
      <div className="w-full mb-6 text-center md:w-80 md:flex-shrink-0 md:mb-0 md:text-left">
        <div className="mb-4 md:mb-6">{iconOrImage}</div>
        <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      </div>
      <div className="flex-grow w-full flex flex-col items-start">
        <div className="w-full mb-6 md:mb-10">
          <p className="text-lg mb-4 md:mb-6">{ShortTitle}</p>
          <p className="text-lg">{description}</p>
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="w-full mb-6 flex flex-col items-start">
            {children}
          </div>
          {
          showLearnMoreButton && (
            <div className="mt-2 w-full flex justify-center md:justify-start">
              <GlobalButton variant={variant} href={learnMoreLink}>
                Learn More →{" "}
              </GlobalButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionLayout;
