import React, { Fragment } from "react";

import Heading from "./Heading";
import Paragraph from "./Paragraph";

function ChangeLog() {
  return (
    <Fragment>
      <div className="bg-[#000] font-dmsans px-10 sm:px-16 md:px-28 py-28 flex flex-col justify-center items-start gap-10">
        <Heading text="ChangeLog" />
        <Paragraph text="If there is any update or change to the template, you'll find it here." />
        <Heading text="Version 1.0" />
        <Paragraph text="Initial Release" />
      </div>
    </Fragment>
  );
}

export default ChangeLog;
