import React, { Fragment } from "react";

import Navbar_Logo from "./assets/Navbar_Logo.svg";
import Navbar_Arrow from "./assets/Navbar_Arrow.svg";

function Navbar() {
  const navbarLinkArray = [
    "Overview",
    "Features",
    "Testimonial",
    "FAQ",
    "Downlaod",
  ];

  return (
    <Fragment>
      <nav className="Navbar w-full h-32 flex row justify-between items-center px-16 font-dmsans relative">
        {/* Navbar Start */}

        <div className="Navbar_Start_Content">
          <a href="/">
            <img src={Navbar_Logo} className="Navbar_Logo" />
          </a>
        </div>

        {/* Navbar Center */}

        <div className="Navbar_Center_Content fixed left-1/2 -translate-x-1/2">
          <ul className="Navbar_Links_Ul flex row justify-center items-center gap-5 bg-[#ffffff33] backdrop-blur-xl rounded-3xl border border-[#ffffff33] py-2 px-12">
            {navbarLinkArray.map((element, index) => (
              <li
                key={index}
                className="Navbar_Li tracking-tight text-sm text-[#ffffffcc] hover:text-[#ffffff] px-2 py-2"
              >
                <a href="#" className="Navbar_Link px-2 py-2">
                  {element}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}

        <div className="Navbar_End_Content">
          <a href="#" className="flex row justify-center items-center gap-2">
            <h5 className="text-white text-base">Buy Template</h5>
            <img src={Navbar_Arrow} className="Navbar_Arrow" />
          </a>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
