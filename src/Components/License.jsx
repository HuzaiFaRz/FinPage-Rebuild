import React, { Fragment } from "react";

import Heading from "./Heading";
import Paragraph from "./Paragraph";

import LicenseImageOne from "../assets/Images/LicenseImageOne.webp";
import LicenseImageTwo from "../assets/Images/LicenseImageTwo.png";

function License() {
  const LicenseContent = [
    {
      image: LicenseImageOne,
      heading: "Unsplash Images",
      title:
        "All images used across the website are from Unsplash.com Licences Info",
    },
    {
      image: LicenseImageTwo,
      heading: "Unsplash Images",
      title:
        "All images used across the website are from Unsplash.com Licences Info",
    },
  ];
  return (
    <Fragment>
      <div className="bg-[#000] font-dmsans px-10 sm:px-16 md:px-28 py-28 flex flex-col justify-center items-start gap-10">
        <Heading text="Licences" />
        <Paragraph text="All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below" />
        {LicenseContent.map((element, index) => {
          return (
            <Fragment key={index}>
              <div className="flex flex-col-reverse lg:flex-row items-start  justify-center w-full py-16 px-0 lg:px-5 gap-10">
                <img
                  src={element.image}
                  className="w-full lg:w-[50%] h-full flex justify-center"
                />
                <div>
                  <h1 className="text-4xl font-sora w-full text-white font-light tracking-tighter">
                    {element.heading}
                  </h1>
                  <p className="text-2xl font-sora w-full text-white font-light tracking-tighter">
                    {element.title}
                  </p>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}

export default License;
