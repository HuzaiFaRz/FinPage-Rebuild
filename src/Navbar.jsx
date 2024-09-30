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

  const navbarDefaultClass =
    "OffCanvas_Links_Ul flex flex-col justify-start items-start gap-5 fixed border-none bg-[#000] lg:Navbar_Links_Ul lg:flex lg:flex-row lg:justify-center lg:w-auto lg:h-auto lg:py-2 lg:px-12 lg:bg-[#ffffff33] lg:backdrop-blur-xl lg:rounded-3xl border lg:border-[#ffffff33] lg:start-1/2 -translate-x-2/4 lg:top-8";

  return (
    <Fragment>
      <nav className="Navbar w-full h-24 z-30 lg:h-28 bg-[#000] lg:bg-transparent flex row justify-between items-center px-6 xl:px-14 font-dmsans cursor-pointer fixed lg:relative">
        {/* Navbar Start */}

        <div className="Navbar_Start_Content">
          <a href="/">
            <img
              src={Navbar_Logo}
              className="Navbar_Logo w-28 md:w-36 lg:w-40"
            />
          </a>
        </div>

        {/* Navbar Center */}

        <div className="Navbar_Center_Content h-full">
          <ul
            style={{ transition: "all 0.3s ease-in-out" }}
            className={`${navbarDefaultClass} ${
              navbarOpen
                ? "w-full h-full left-1/2 top-24"
                : "w-full h-0 left-1/2 top-24"
            }`}
          >
            {linksArray.map((element, index) => (
              <li
                key={index}
                style={{ transition: "all 0.3s ease-in-out" }}
                className={`Navbar_Li text-2xl tracking-tight py-8 px-10 mt-5 text-[#ffffffcc] hover:text-[#ffffff] lg:mt-0 lg:px-2 lg:py-2 lg:text-sm ${
                  navbarOpen ? "opacity-1" : "opacity-0 -mb-5"
                }`}
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
          <a
            href="#"
            className="hidden flex-row justify-center items-center gap-2 px-2 py-2 relative lg:flex"
          >
            <h5 className="text-white text-base">Buy Template</h5>
            <img src={Navbar_Arrow} className="Navbar_Arrow" />
          </a>

          <div
            className="flex flex-col justify-center items-end gap-1 relative px-5 py-5 lg:hidden"
            onClick={NavbrOpenFunctionility}
          >
            {navbarOpen ? (
              <>
                <span className="w-6 md:w-12 h-1 border-t-2 -rotate-45"></span>
                <span className="w-6 md:w-12 h-1 border-t-2 rotate-45"></span>
              </>
            ) : (
              <>
                <span className="w-5 md:w-7 h-1 border-t-2"></span>
                <span className="w-7 md:w-9 h-1 border-t-2"></span>
              </>
            )}

            {/* <button x-data="{ open: false }"
          x-on:click="open = !open"
          class="flex items-center space-x-2 focus:outline-none">
    <span x-text="open ? 'Close' : 'Open'"
          class="font-medium text-lg">Open</span>
    
    <div class="w-6 flex items-center justify-center relative">
      <span x-bind:class="open ? 'translate-y-0 rotate-45' : '-translate-y-2'"
            class="transform transition w-full h-px bg-current absolute"></span>
      
      <span x-bind:class="open ? 'opacity-0 translate-x-3' : 'opacity-100'"
            class="transform transition w-full h-px bg-current absolute"></span>
      
      <span x-bind:class="open ? 'translate-y-0 -rotate-45' : 'translate-y-2'"
            class="transform transition w-full h-px bg-current absolute"></span>
    </div>
  </button> */}

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
