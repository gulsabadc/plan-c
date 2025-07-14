import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const SwiperCardsDemo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <Swiper
        effect="cards"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[EffectCards, Pagination]}
        className="w-[320px] h-[400px] mx-auto"
      >
        <SwiperSlide>
          <div className="w-full h-full rounded-2xl flex items-center justify-center text-2xl font-bold bg-green-700 text-white">
            Card 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full rounded-2xl flex items-center justify-center text-2xl font-bold bg-blue-700 text-white">
            Card 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full rounded-2xl flex items-center justify-center text-2xl font-bold bg-red-700 text-white">
            Card 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCardsDemo;
