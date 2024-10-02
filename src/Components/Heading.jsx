import React from "react";

function Heading({ text }) {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sora w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]   text-white  font-light tracking-tighter">
      {text}
    </h1>
  );
}

export default Heading;
