import React from "react";
import SectionLayout from "./components/SectionLayout";
import innovationImage from "../../assets/images/innovation-crystal.png"; // TODO: Replace with the actual image for Innovation

const Innovation = () => {
  const title = "Overview of Plan C, LLC";
  const description =
    "We are a Boston-based consulting and AI innovation firm specializing in strategic product management & trustworthy AI solutions. Our mission is to empower companies to achieve product success while using AI to combat misinformation. By integrating ethical AI practices, we help businesses navigate challenges and seize opportunities in a complex digital landscape, fostering trust and transparency with their users.";

  return (
    <SectionLayout
      iconOrImage={
        <img
          src={innovationImage.src}
          alt="Innovation Icon"
          style={{ width: "100px", height: "100px" }}
        />
      }
      title="Our Innovation"
      description="AI-powered truth verification that stops misinformation before it spreads. We analyze digital content in real-time, providing instant credibility insights. Transforming how we consume and share information."
      showLearnMoreButton={true}
      learnMoreLink="/innovation" // Or wherever the learn more page is
    >
      {/* The ChirpChecker screenshot goes here */}
      <div>
        <h3>Presenting ChirpChecker — A Plan C for Truth in the Digital Age</h3>
        <p>
          Misinformation has become a global crisis, eroding trust in public
          discourse. Instead of waiting for tech giants to address the problem,
          Plan C took action.
        </p>
        {/* <img src="/path/to/chirpchecker-screenshot.png" alt="ChirpChecker Screenshot" /> */}
      </div>
    </SectionLayout>
  );
};

export default Innovation;
