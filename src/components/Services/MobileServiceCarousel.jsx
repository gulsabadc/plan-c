import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import item01 from "@/assets/images/item01.png";
import item02 from "@/assets/images/item02.png";
import item03 from "@/assets/images/item03.png";
import item04 from "@/assets/images/item04.png";
import item05 from "@/assets/images/item05.png";

const serviceItems = [
  {
    count: "001",
    text: "Product Vision & Strategy",
    backgroundImage: item01,
    bgColor: "#4A7453",
    content:
      "We work with leadership teams to define a clear vision, ensuring that product development aligns with business objectives.",
  },
  {
    count: "002",
    text: "Market Analysis & Positioning",
    backgroundImage: item02,
    bgColor: "#3A6743 ",
    content:
      "We provide: Market positioning & competitive analysis, Customer acquisition & retention strategies, Pricing and business model optimization.",
  },
  {
    count: "003",
    text: "Agile Product Development",
    backgroundImage: item03,
    bgColor: "#2D5536",
    content:
      "We help teams adopt agile methodologies that improve development efficiency and time-to-market.",
  },
  {
    count: "004",
    text: "Go-to-Market Planning",
    backgroundImage: item04,
    bgColor: "#1D4426 ",
    content:
      "Launching and scaling a product requires a strategic, data-driven approach.",
  },
  {
    count: "005",
    text: "AI & Emerging Technology Integration",
    backgroundImage: item05,
    bgColor: "#14361C",
    content:
      "We help companies leverage AI to stay ahead by optimizing product strategy, ensuring compliance, and scaling data-driven decision-making.",
  },
];

const MobileServiceCarousel = () => {
  return (
    <div
      className="block md:hidden w-full flex justify-center items-center swiper"
      style={{ padding: 0, margin: 0 }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.15}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-[280px] h-[333px] mx-auto mt-8"
        onSwiper={(swiper) => {
          swiper.on("progress", () => {
            swiper.slides.forEach((slide, idx) => {
              const progress = slide.progress;
              const fade = Math.max(0, 1 - Math.abs(progress) * 1.5);
              const text = slide.querySelector(".slide-text-fade");
              if (text) text.style.opacity = fade;
            });
          });
        }}
      >
        {serviceItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="rounded-[20px]  w-full h-full flex flex-col justify-start text-white  relative overflow-hidden border border-[#4C4C4C]"
              style={{
                backgroundColor: item.bgColor,
              }}
            >
              <div className="absolute inset-0 z-0" />
              <div
                className="relative z-10 p-6 slide-text-fade"
                style={{ transition: "opacity 0.3s" }}
              >
                <div
                  className="text-[22px] font-bold mb-6"
                  style={{ letterSpacing: "-3%", lineHeight: "100%" }}
                >
                  {item.text}
                </div>
                <div
                  className="text-[18px] text-[#FFFFFF80]"
                  style={{ letterSpacing: "-3%", lineHeight: "24px" }}
                >
                  {item.content}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileServiceCarousel;
