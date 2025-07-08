"use client";
import Image from "next/image";
import contactCrystal from "@/assets/images/contact-crystal.png";
import GlobalButton from "@/components/Button";
import smallTexure from "../../assets/images/texure-small.png";
import texture from "../../assets/images/texture.png";

const sectionStyle = {
  backgroundImage: `url(${texture.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center top",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#00310A",
  backgroundBlendMode: "multiply",
};

export default function ContactPage() {
  return (
    <div
      style={sectionStyle}
      className="min-h-screen  flex flex-col items-center pt-[90px] pb-[110px] px-[160px]"
    >
      {/* Top Banner */}
      <div
        className="w-full w-[100%] rounded-[10px] bg-[#002106CC] mb-12 p-[28px] text-center"
        style={{
          backgroundImage: `url(${smallTexure.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundColor: " #002106CC",
          backgroundBlendMode: "multiply",
        }}
      >
        <span
          className="text-[44px] font-semibold text-[#D9D9D9]"
          style={{ lineHeight: "44px", letterSpacing: "-4%" }} 
        >
          Reach out today to explore how we can work together{" "}
          <span
            className="text-[#D9D9D980]
"
          >
            on
          </span>{" "}
          <span >
            strategy, innovation, &amp; AI-driven
          </span>
          <span className="text-[#D9D9D980]"> solutions.</span>
        </span>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 justify-center items-stretch">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <Image
            src={contactCrystal}
            alt="Contact Crystal"
            width={200}
            height={200}
            className="crystal-float transform-gpu animate-crystal-float animate-crystal-spin mb-4"
            style={{
              minWidth: 90,
              minHeight: 90,
              mixBlendMode: "hard-light",
            }}
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center md:text-left">
            Let's Make Something <br />
            <span className=""> Great!</span>
          </h2>
          <div className="mt-6 w-[80%] flex flex-col gap-3">
            <div className="bg-[#BFFF001F] rounded-[3px]  text-[26px] px-4  ">
              Email: <a href="mailto:dan@plancllc.com">dan@plancllc.com</a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          className="flex-1 bg-[#FFFFFF14] rounded-[10px] pt-[36px] pb-[48px] px-[50px] flex flex-col gap-5  min-w-[300px] max-w-lg mx-auto"
          style={{ border: "1px solid #FFFFFF1A", minWidth: 320 }}
        >
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border-b border-[#FFFFFF66] placeholder:text-[#FFFFFF4D] text-white py-3 px-2 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-b border-[#FFFFFF66] placeholder:text-[#FFFFFF4D] text-white py-3 px-2 outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="bg-transparent border-b border-[#FFFFFF66] placeholder:text-[#FFFFFF4D] text-white py-3 px-2 outline-none min-h-[140px] mb-[12px]"
          />
          <GlobalButton variant="outlined" href="/contact">
            Let's Create Magic <span className="ml-2"> →</span>
          </GlobalButton>
        </form>
      </div>
    </div>
  );
}
