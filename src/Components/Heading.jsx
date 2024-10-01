import React from "react";

function Heading({ text }) {
  return (
    <h1 className="text-5xl w-full sm:text-6xl md:text-7xl lg:text-8xl  text-white font-sora font-light tracking-tighter">
      {text}
    </h1>
  );
}

export default Heading;
