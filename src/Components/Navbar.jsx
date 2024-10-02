import React, { Fragment, useState } from "react";

import Navbar_Logo from "../assets/Images/Navbar_Logo.svg";
import Navbar_Arrow from "../assets/Images/Navbar_Arrow.svg";

const linksArray = ["Overview", "Features", "Testimonial", "FAQ", "Downlaod"];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const NavbrOpenFunctionility = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navbarDefaultClass = `OffCanvas_Links_Ul w-full flex flex-col justify-start items-start gap-5 fixed left-1/2 top-24 border-none bg-[#000] lg:Navbar_Links_Ul lg:flex lg:flex-row lg:justify-center 
    lg:w-auto lg:h-auto lg:py-2 lg:px-12 lg:bg-[#ffffff33]  lg:backdrop-blur-xl lg:rounded-3xl border lg:border-[#ffffff33] lg:start-1/2 -translate-x-2/4 lg:top-8`;

  return (
    <Fragment>
      <nav className="Navbar w-full h-24 z-30 lg:h-28 bg-[#000] lg:bg-[#0000004d] flex row justify-between items-center px-6 xl:px-14 font-dmsans cursor-pointer fixed lg:relative">
        {/* Navbar Start */}

        <div className="Navbar_Start_Content">
          <a href="/">
            <img
              src={Navbar_Logo}
              className="Navbar_Logo w-36 md:w-40 lg:w-full"
            />
          </a>
        </div>

        {/* Navbar Center */}

        <div className="Navbar_Center_Content w-full lg:w-auto h-full">
          <ul
            style={{ transition: "all 0.3s ease-in-out" }}
            className={`${navbarDefaultClass} ${
              navbarOpen ? "h-full" : "h-0"
            } `}
          >
            {linksArray.map((element, index) => (
              <li
                key={index}
                style={{ transition: "all 0.3s ease-in-out" }}
                className={`Navbar_Li hidden invisible text-sm tracking-tight mt-0 px-2 py-2 lg:block lg:visible text-[#ffffffcc] hover:text-[#ffffff] `}
              >
                <a href="#" className="Navbar_Link px-2 py-2">
                  {element}
                </a>
              </li>
            ))}

            {linksArray.map((element, index) => (
              <li
                key={index}
                style={{ transition: "all 0.3s ease-in-out" }}
                className={`Offcanvas_Li block visible text-2xl opacity-1 tracking-tight py-8 px-10 mt-5 lg:hidden lg:invisible text-[#ffffffcc] hover:text-[#ffffff] ${
                  navbarOpen ? "opacity-1 mt-0" : "opacity-0 mt-60"
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

        <div className="Navbar_End_Content flex flex-row items-center justify-end">
          <a href="#" className="hidden lg:flex absolute">
            <h5 className="text-white text-base">Buy Template</h5>
            <img src={Navbar_Arrow} className="Navbar_Arrow" />
          </a>

          <div
            className="w-[4rem] h-[4rem] flex flex-col justify-center items-center"
            onClick={(e) => {
              e.target.classList.toggle("open");
              NavbrOpenFunctionility();
            }}
          >
            <div className="w-full h-full scale-50 sm:scale-75 lg:scale-0 relative mt-4 md:mt-5 transform rotate-0 transition-all ease-in-out duration-300 lg:hidden">
              <span
                className={`${`origin-left block absolute h-[3px] bg-[#fff] rounded-[9px] opacity-100 transition-all ease-in-out duration-300`}
${
  navbarOpen
    ? "transform rotate-45 top-[-3px] left-[8px] w-full"
    : "transform rotate-0  top-0 right-0 w-2/4"
}`}
              ></span>

              <span
                className={`${`origin-left block absolute  bg-[#fff] h-[3px] w-full rounded-[9px] opacity-100 left-0 transition-all ease-in-out duration-300`}
${
  navbarOpen
    ? "transform -rotate-45 top-[39px] left-[8px]"
    : "transform rotate-0 top-[15px] left-0"
}`}
              ></span>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;

// transform rotate-45 top-[-3px] left-[8px]

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
