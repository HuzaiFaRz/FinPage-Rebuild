import React, { Fragment, useEffect } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import StyleGuideImage from "../assets/Images/StyleGuideImage.svg";

function StyleGuid() {
  useEffect(() => {
    if (window.location.href !== "/") {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const textArray = [
    "The rich text element allows you to create and format headings",
    "Headings, paragraphs, blockquotes, figures, images, and figure captions",
    "A rich text element can be used with static or dynamic content.",
  ];
  return (
    <Fragment>
      <div className="bg-[#000] font-dmsans px-10 sm:px-16 py-8 flex flex-col justify-center items-start gap-10">
        <Heading text="Style Guide" />
        <Paragraph text="Here are the styles and components used through the site. You can make global site changes when you change styles on this page." />

        <img
          src={StyleGuideImage}
          className="w-full h-full object-cover object-center"
        />
        <Heading text="How to customize formatting for each rich text" />
        <Paragraph text="Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the When inside of nested selector system." />
        <ul className="flex flex-col justify-start items-center list-decimal gap-6 px-5">
          {textArray.map((element, index) => {
            return (
              <Fragment key={index}>
                <li className="w-full text-[#fff] text[13px] sm:text-lg font-sora">
                  {element}
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default StyleGuid;
