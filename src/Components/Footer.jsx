import React, { Fragment } from "react";

import Footer_Instagram_Icon from "../assets/Images/Footer_Instagram_Icon.svg";
import Footer_Twitter_Icon from "../assets/Images/Footer_Twitter_Icon.svg";
import Footer_Facebook_Icon from "../assets/Images/Footer_Facebook_Icon.svg";
import FooterIcon from "./FooterIcon";
import { Link } from "react-router-dom";
import Apple_Store_Icon from "../assets/Images/App_Store_Image.webp";
import Google_Play_Image from "../assets/Images/Google_Play_Image.webp";

import { Navbar_Logo } from "./Navbar";

function Footer() {
  const footerLinksArray1 = [
    "Overview",
    "Features",
    "Testimonial",
    "FAQ",
    "Downlaod",
  ];
  const footerLinksArray2 = [
    { footerlink: "StyleGuide", footerHref: "styleguide" },
    { footerlink: "License", footerHref: "license" },
    { footerlink: "ChangeLog", footerHref: "changelog" },
  ];
  return (
    <Fragment>
      <footer className="bg-[#000] cursor-pointer py-5 font-dmsans">
        <div className="flex flex-wrap justify-center items-center px-1 sm:px-10">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-center text-center sm:text-start sm:items-start py-12 px-2 md:px-5 gap-10">
            <img src={Navbar_Logo} className="w-[200px]" />
            <p className="text-[1rem] md:text-lg text-[#ffffffb3] w-full sm:w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-5">
              <FooterIcon
                href="https://www.apple.com/id/app-store/"
                src={Apple_Store_Icon}
                size="w-[187px] h-[55px]"
              />
              <FooterIcon
                href="https://play.google.com/store"
                src={Google_Play_Image}
                size="w-[187px] h-[55px]"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex flex-wrap justify-between items-start py-12 px-10 sm:px-5 gap-y-10">
            <ul className="flex flex-col justify-center items-start">
              <h5 className="text-2xl text-white pb-5">Product</h5>
              {footerLinksArray1.map((element, index) => {
                return (
                  <li
                    className="Footer_Li text-lg tracking-tight mt-0 px-2 py-2 text-[#ffffffb3] hover:text-[#ffffff]"
                    key={index}
                  >
                    <a id="link" href={`#${element}`}>
                      {element}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col justify-center items-start">
              <h5 className="text-2xl text-white pb-5">Template</h5>
              {footerLinksArray2.map((element, index) => {
                return (
                  <li
                    className="Footer_Li  text-lg tracking-tight mt-0 px-2 py-2 text-[#ffffffb3] hover:text-[#ffffff]"
                    key={index}
                  >
                    <Link to={`${element.footerHref}`} id="link">
                      {element.footerlink}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center py-10 px-8 gap-y-10 w-full">
          <div className="flex flex-row justify-center items-center gap-7">
            <FooterIcon
              href="https://instagram.com"
              src={Footer_Instagram_Icon}
              size="w-[25px] h-[25px]"
            />
            <FooterIcon
              href="https://twitter.com/"
              src={Footer_Twitter_Icon}
              size="w-[25px] h-[25px]"
            />
            <FooterIcon
              href="https://facebook.com"
              src={Footer_Facebook_Icon}
              size="w-[25px] h-[25px]"
            />
          </div>
          <span className="flex flex-row justify-center items-center gap-1 text-[#ffffffb3] text-lg font-normal">
            Finpage. Powered by{" "}
            <a
              href="https://webflow.com/"
              target="_blank"
              className="font-medium text-white"
            >
              Webflow
            </a>
          </span>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
