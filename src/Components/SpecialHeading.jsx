import React from "react";

function SpecialHeading({ leftText, specialText, centerText, lineBreak }) {
  return (
    <h1 className="font-sora pb-5 text-center w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tighter">
      {leftText}{" "}
      <span className="bg-gradient-to-b from-[#00c7e8] via-[#0bb4ea] to-[#7004ff] bg-clip-text  text-transparent">
        {specialText}
      </span>
      {lineBreak}
      {centerText}
    </h1>
  );
}

export default SpecialHeading;
