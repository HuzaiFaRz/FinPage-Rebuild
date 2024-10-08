import React, { Fragment } from "react";

import Heading from "./Heading";
import Paragraph from "./Paragraph";

function pageContent({ image, icon, heading, title, flex }) {
  return (
    <Fragment>
      <div
        className={`page w-full h-full flex justify-center items-start lg:items-center bg-[#000] 
        ${flex}`}
      >
        <div className="w-full lg:w-[50%] flex flex-col items-start justify-center gap-8 py-12 px-8 xl:px-16">
          <img
            src={icon}
            className="object-center object-cover w-[60px] h-[60px]"
          />
          <Heading text={heading} />
          <Paragraph text={title} />
        </div>
        <div className="w-full lg:w-[50%] h-full flex justify-center">
          <img src={image} className="object-cover w-full h-full" />
        </div>
      </div>
    </Fragment>
  );
}

export default pageContent;
