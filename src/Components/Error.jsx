import React, { Fragment } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <Fragment>
      <main
        id="Overview"
        className="main w-full h-[100vh] bg-[url('https://assets-global.website-files.com/654642f8b348306163b5ff9c/654653362e267b5cefd2a9fa_Hero.webp')] bg-cover bg-center bg-no-repeat bg-fixed font-dmsans"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <div
          className="main_page bg-[#0000009d]  w-full h-[100vh] flex flex-col items-center text-center justify-center gap-8 px-8 xl:px-16"
          id="Overview"
        >
          <Heading text={"Oops!"} />
          <p className="w-full font-dmsans text-lg  text-[#ffffff] font-light tracking-wide leading-6">
            Sorry, an unexpected error has occurred.
          </p>
          <Paragraph text={error.statusText || error.message} />
        </div>
      </main>
    </Fragment>
  );
}

export default Error;
