import React from "react";
import Image from "next/image";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";
import card5 from "../../assets/images/card5.png";
import VectorOverlay from "../VectorOverlay";

const cardData = [
  {
    src: card1,
    className: "w-[64px] sm:w-[236px] xl:w-[372px] h-[304px] sm:h-[160px]",
  },
  {
    src: card2,
    className:
      "w-[158px] sm:w-[304px] xl:w-[372px] h-[160px] sm:h-[308px] z-10",
  },
  {
    src: card3,
    className: "w-[180px] sm:w-[304px] xl:w-[372px] h-[180px] sm:h-[346px]",
  },
  {
    src: card4,
    className:
      "w-[158px] sm:w-[304px] xl:w-[372px] h-[160px] sm:h-[308px] z-10",
  },
  {
    src: card5,
    className: "w-[64px] sm:w-[236px] xl:w-[372px] h-[64px] sm:h-[243px]",
  },
];

const Cards = () => (
  <div className="relative overflow-hidden w-full mt-0">
    {/* <VectorOverlay className="absolute top-0 left-0 w-full h-full" /> */}
    <div className="flex justify-center items-end gap-0 ">
      {cardData.map((card, idx) => (
        <div key={idx} className={`flex flex-col items-center flex-shrink-0 `}>
          <Image
            src={card.src}
            alt={`Card ${idx + 1}`}
            className={`no-global-img object-cover ${card.className}`}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Cards;
