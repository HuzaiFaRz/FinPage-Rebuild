import React, { Fragment } from "react";

import Page_Two_Image from "../assets/Images/Page_Two_Image.webp";

import Page_Two_Icon from "../assets/Images/Page_Two_Icon.svg";

import Heading from "./Heading";
import Paragraph from "./Paragraph";

function PageTwoContent() {
  return (
    <Fragment>
      <div className="page-2 w-full h-[1400px] lg:h-[1076px] flex flex-col-reverse lg:flex-row justify-center items-start lg:items-center bg-[#000] overflow-hidden">
        <div className="w-full lg:w-[50%] flex flex-col items-start justify-center gap-8 py-12 px-8 xl:px-16">
          <img
            src={Page_Two_Icon}
            className="object-center object-cover w-[60px] h-[60px]"
          />
          <Heading text="A Simple Way to Manage Your Financial" />
          <Paragraph text="Lorem ipsum dolor sit amet consectetur. Nunc amet cras accumsan vitae. Quis in quis volutpat mi in" />
        </div>
        <div className="w-full lg:w-[50%] h-full flex justify-center">
          <img
            src={Page_Two_Image}
            className=" object-cover w-full h-[80%] sm:h-full sm:w-full"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default PageTwoContent;
