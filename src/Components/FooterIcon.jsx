import React from "react";

function FooterIcon({ src, size, href }) {
  return (
    <a href={href} target="_blank">
      <img src={src} className={`object-cover object-center${size}`} />
    </a>
  );
}

export default FooterIcon;
