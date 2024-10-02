import React from "react";

function SpecialHeading({ leftText, specialText, centerText, lineBreak }) {
  return (
    <h1 className="text-5xl font-sora pb-5 text-center w-full md:text-6xl lg:text-7xl  text-white font-sora font-light tracking-tighter leading-tight">
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
