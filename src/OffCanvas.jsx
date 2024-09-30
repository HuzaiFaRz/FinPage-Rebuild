import React from "react";
import { linksArray } from "./Navbar.jsx";

function OffCanvas() {
  return (
    <div className="offCanvas w-full h-screen absolute invisible start-0 bg-[#000] -z-50">
      <ul className="offCanvas-Link-Ul flex flex-col items-center justify-center w-full h-full ">
        {linksArray.map((element, index) => (
          <li
            key={index}
            className="Navbar_Li text-2xl tracking-tight text-[#ffffffcc] hover:text-[#ffffff] px-2 py-2"
          >
            <a href="#" className="Navbar_Link px-2 py-2">
              {element}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OffCanvas;
