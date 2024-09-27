import React, { Fragment, useState } from "react";

import Navbar_Logo from "./assets/Navbar_Logo.svg";
import Navbar_Arrow from "./assets/Navbar_Arrow.svg";

function Navbar() {
  const [navbarLink, SetNavbarLink] = useState("OverView");

  return (
    <Fragment>
      <nav className="w-full h-32 bg-zinc-600 flex row justify-between items-center px-10">
        <div className="Navbar_Start_Content">
          <img src={Navbar_Logo} className="Navbar_Logo" />
        </div>
        <div className="Navbar_Center_Content">
          <ul className="Navbar_Links">
            <li>
              <a href="#">{navbarLink}</a>
            </li>
          </ul>
        </div>
        <div className="Navbar_End_Content">
          <div className="flex row justify-center items-center gap-2">
            <h5 className="text-white text-base">Buy Template</h5>
            <img src={Navbar_Arrow} className="Navbar_Arrow" />
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
