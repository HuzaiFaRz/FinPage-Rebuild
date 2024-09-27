import React from "react";

function Button({ text, href }) {
  return (
    <a
      href={href}
      type="button"
      className="px-8 py-4 text-lg font-semibold transition text-white bg-[#ffffff33] backdrop-blur-xl rounded-3xl border border-[#ffffff33] hover:bg-[#fff] hover:text-[#000]"
    >
      {text}
    </a>
  );
}

export default Button;
