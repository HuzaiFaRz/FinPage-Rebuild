import React, { Fragment } from "react";

import SpecialCardImage1 from "../assets/Images/SpecialCardImage1.webp";
import SpecialCardImage2 from "../assets/Images/SpecialCardImage2.webp";
import SpecialCardImage3 from "../assets/Images/SpecialCardImage3.webp";
import SpecialCardImage4 from "../assets/Images/SpecialCardImage4.webp";
import SpecialCardImage5 from "../assets/Images/SpecialCardImage5.webp";
import SpecialCardImage6 from "../assets/Images/SpecialCardImage6.webp";

function SpecialCard() {
  const specialCardContent = [
    {
      image: SpecialCardImage1,
      text: "Spend Tracking",
    },
    {
      image: SpecialCardImage2,
      text: "Automatic Saving",
    },
    { image: SpecialCardImage3, text: "Easy Payment" },
    {
      image: SpecialCardImage4,
      text: "Credit Monitoring",
    },
    {
      image: SpecialCardImage5,
      text: "Home Screen Widget",
    },
    {
      image: SpecialCardImage6,
      text: "Collaborate in Style",
    },
  ];

  return (
    <Fragment>
      {specialCardContent.map((element, index) => (
        <div
          className="w-full h-96 md:w-96 md:h-96 py-5 px-5 font-sora bg-[#ffffff0d] border border-[#ffffff33] rounded-3xl relative overflow-hidden
          hover:-translate-y-5 hover:bg-[#ffffff1a] will-change-[transform,background]"
          key={index}
        >
          <span className="text-white w-[80%] text-[28px]">
            {" "}
            {element.text}
          </span>
          <img
            src={element.image}
            className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover object-[50%,50%]"
          />
        </div>
      ))}
    </Fragment>
  );
}

export default SpecialCard;
