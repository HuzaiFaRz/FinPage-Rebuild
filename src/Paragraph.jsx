import React from "react";

function Paragraph({ text }) {
  return (
    <p className="w-full xl:w-[50%] text-lg  text-[#ffffffb3] font-sora font-light tracking-wide leading-6 ">
      {text}
    </p>
  );
}

export default Paragraph;
