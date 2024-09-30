import React, { Fragment, useState } from "react";

import Navbar_Logo from "./assets/Navbar_Logo.svg";
import Navbar_Arrow from "./assets/Navbar_Arrow.svg";

const linksArray = ["Overview", "Features", "Testimonial", "FAQ", "Downlaod"];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const NavbrOpenFunctionility = () => {
    console.log(this);
    setNavbarOpen(!navbarOpen);
  };

  return (
    <Fragment>
      <nav className="Navbar w-full h-24 lg:h-28 bg-zinc-600 flex row justify-between items-center px-6 xl:px-14 font-dmsans cursor-pointer fixed lg:relative">
        {/* Navbar Start */}

        <div className="Navbar_Start_Content z-40 left-8 top-8">
          <a href="/">
            <img
              src={Navbar_Logo}
              className="Navbar_Logo w-28 md:w-36 lg:w-40"
            />
          </a>
        </div>

        {/* Navbar Center */}

        <div className="Navbar_Center_Content">
          <ul
            style={{ transition: "all 0.4s linear" }}
            className={
              navbarOpen
                ? "OffCanvas_Links_Ul flex flex-col justify-start items-start gap-5 fixed w-full h-screen left-1/2 top-0 z-30 px-20 py-40 bg-[#000] border-none lg:Navbar_Links_Ul lg:flex lg:flex-row lg:justify-center lg:w-auto lg:h-auto lg:py-2 lg:px-12 lg:bg-[#ffffff33] lg:backdrop-blur-xl lg:rounded-3xl border  lg:border-[#ffffff33] lg:start-1/2 -translate-x-2/4 lg:top-8"
                : "OffCanvas_Links_Ul flex flex-col justify-start items-start gap-5 fixed w-full h-screen left-1/2 -top-full z-30 px-20 py-40 bg-[#000] border-none lg:Navbar_Links_Ul lg:flex lg:flex-row lg:justify-center lg:w-auto lg:h-auto lg:py-2 lg:px-12 lg:bg-[#ffffff33] lg:backdrop-blur-xl lg:rounded-3xl border  lg:border-[#ffffff33] lg:start-1/2 -translate-x-2/4 lg:top-8"
            }
          >
            {linksArray.map((element, index) => (
              <li
                key={index}
                className="Navbar_Li text-2xl tracking-tight text-[#ffffffcc] hover:text-[#ffffff] px-2 py-2  lg:text-sm "
              >
                <a href="#" className="Navbar_Link px-2 py-2">
                  {element}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}

        <div className="Navbar_End_Content z-40">
          <a
            href="#"
            className="hidden flex-row justify-center items-center gap-2 px-2 py-2 relative lg:flex"
          >
            <h5 className="text-white text-base">Buy Template</h5>
            <img src={Navbar_Arrow} className="Navbar_Arrow" />
          </a>

          <div
            className="flex flex-col justify-center items-end gap-1 relative lg:hidden"
            onClick={NavbrOpenFunctionility}
          >
            {navbarOpen ? (
              <>
                <span className="w-14 h-1 border-t-2 -rotate-45"></span>
                <span className="w-14 h-1 border-t-2 rotate-45"></span>
              </>
            ) : (
              <>
                <span className="w-5 md:w-7 h-1 border-t-2"></span>
                <span className="w-7 md:w-9 h-1 border-t-2"></span>
              </>
            )}

            {/* <input
              type="checkbox"
              className="absolute w-full h-full left-0 top-0 opacity-1 z-50 cursor-pointer"
              onClick={(e) => {
                console.log(this);

                e.target.checked ? setNavbarOpen(true) : setNavbarOpen(false);
              }}
            /> */}
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;

// import React, { useState } from 'react';

// const App = () => {
//   // State to control div visibility
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle the state when button is clicked
//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* Button to toggle div */}
//       <button onClick={handleClick}>
//         {isOpen ? 'Close Div' : 'Open Div'}
//       </button>

//       {/* Conditionally rendering the div */}
//       {isOpen && (
//         <div style={{ padding: '10px', backgroundColor: '#f0f0f0', marginTop: '10px' }}>
//           This is the div content!
//         </div>
//       )}
//     </div>
//   );
// };
