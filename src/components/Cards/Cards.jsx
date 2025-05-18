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
    className: "w-[304px] sm:w-[304px] h-[304px] sm:h-[243px] ",
  },
  {
    src: card2,
    className: "w-[100px] sm:w-[304px] h-[100px] sm:h-[308px] z-10",
  },
  {
    src: card3,
    className: "w-[140px] sm:w-[304px] h-[140px] sm:h-[346px]",
  },
  {
    src: card4,
    className: "w-[100px] sm:w-[304px] h-[100px] sm:h-[308px] z-10",
  },
  {
    src: card5,
    className: "w-[64px] sm:w-[304px] h-[64px] sm:h-[243px] ",
  },
];

const Cards = () => (
  <div className="relative overflow-hidden w-full">
    <VectorOverlay />
    <div className="flex flex-row items-end gap-4 w-max relative ">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className={`flex flex-col items-center ${card.className} flex-shrink-0`}
        >
          <Image
            src={card.src}
            alt={`Card ${idx + 1}`}
            className="no-global-img"
          />
        </div>
      ))}
      
    </div>
  </div>
);

export default Cards;
