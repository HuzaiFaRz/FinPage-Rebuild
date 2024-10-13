import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar_Logo from "../assets/Images/Navbar_Logo.svg";
import Navbar_Arrow from "../assets/Images/Navbar_Arrow.svg";
import Footer from "./Footer";

export { Navbar_Logo };
const linksArray = ["Overview", "Features", "Testimonial", "FAQ", "Downlaod"];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const NavbrOpenFunctionility = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navbarDefaultClass = `OffCanvas_Links_Ul w-[100vw] flex flex-col justify-start items-start gap-2 md:gap-5 absolute left-1/2 top-24 border-none bg-[#000]
   lg:Navbar_Links_Ul lg:flex lg:flex-row lg:justify-center lg:w-auto lg:h-auto lg:py-2 lg:px-12 lg:bg-[#ffffff33]  lg:backdrop-blur-xl lg:rounded-3xl
    border lg:border-[#ffffff33] lg:fixed lg:start-1/2 -translate-x-2/4 lg:top-8`;

  return (
    <Fragment>
      <main
        id="Overview"
        className="main overflow-x-hidden w-full h-full bg-[url('https://assets-global.website-files.com/654642f8b348306163b5ff9c/654653362e267b5cefd2a9fa_Hero.webp')] bg-cover bg-center bg-no-repeat bg-fixed font-dmsans"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <nav className="Navbar w-full h-24 z-30 lg:h-28 bg-[#000] lg:bg-[#0000004d] flex row justify-between items-center px-6 xl:px-14 font-dmsans cursor-pointer fixed lg:relative">
          {/* Navbar Start */}

          <div className="Navbar_Start_Content">
            <Link to={"/"}>
              <img
                src={Navbar_Logo}
                className="Navbar_Logo w-52 md:w-60 lg:w-full"
              />
            </Link>
          </div>

          {/* Navbar Center */}

          <div className="Navbar_Center_Content w-full lg:w-auto h-full">
            <ul
              style={{ transition: "all 0.3s ease-in-out" }}
              className={`${navbarDefaultClass} ${
                navbarOpen ? "h-[100vh]" : "h-0"
              } `}
            >
              {linksArray.map((element, index) => (
                <li
                  key={index}
                  style={{ transition: "all 0.3s ease-in-out" }}
                  className={`Navbar_Li hidden invisible text-sm tracking-tight mt-0 px-2 py-2 lg:block lg:visible text-[#ffffffcc] hover:text-[#ffffff] `}
                >
                  <a
                    id="link"
                    href={`#${element}`}
                    className="Navbar_Link px-2 py-2"
                  >
                    {element}
                  </a>
                </li>
              ))}

              {linksArray.map((element, index) => (
                <li
                  key={index}
                  style={{ transition: "all 0.3s ease-in-out" }}
                  className={`Offcanvas_Li block visible text-2xl opacity-1 tracking-tight py-6 px-10 mt-5 lg:hidden lg:invisible text-[#ffffffcc] hover:text-[#ffffff] ${
                    navbarOpen
                      ? "opacity-1 mt-0 visible"
                      : "opacity-0 mt-60 invisible"
                  }`}
                >
                  <a
                    id="link"
                    href={`#${element}`}
                    className="Offcanvas_Li px-2 py-2"
                  >
                    {element}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navbar End */}

          <div className="Navbar_End_Content flex flex-row items-center justify-end">
            <a
              href="https://webflow.com/templates/html/finpage-app-website-template"
              target="_blank"
              className="hidden lg:flex absolute"
            >
              <h5 className="text-white text-base">Buy Template</h5>
              <img src={Navbar_Arrow} className="Navbar_Arrow" />
            </a>

            <div
              className="w-[64px] h-[64px] scale-50 sm:scale-75 lg:scale-100 transform rotate-0 transition-all ease-in-out duration-300 lg:hidden"
              onClick={() => {
                NavbrOpenFunctionility();
              }}
            >
              <span
                className={`${`origin-left block absolute h-[3px] top-1/2 -translate-y-1/2  bg-[#fff] rounded-[9px] opacity-100 transition-all ease-in-out duration-300`}
                  ${
                    navbarOpen
                      ? "transform rotate-45 top-[-3px] left-[8px] w-full"
                      : "transform rotate-0  top-0 right-0 w-2/4"
                  }`}
              ></span>

              <span
                className={`${`origin-left block absolute top-1/2 -translate-y-1/2  bg-[#fff] h-[3px] w-full rounded-[9px] opacity-100 left-0 transition-all ease-in-out duration-300`}${
                  navbarOpen
                    ? "transform -rotate-45 top-[39px] left-[8px]"
                    : "transform rotate-0 top-[15px] left-0"
                }`}
              ></span>
            </div>
          </div>
        </nav>
        <Outlet />
        <Footer />
      </main>
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
