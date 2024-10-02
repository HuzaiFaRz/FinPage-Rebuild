import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";
import PageContent from "./PageContent";

import SpecialCard from "./SpecialCard";
import SpecialHeading from "./SpecialHeading";

import Page_One_Image from "../assets/Images/Page_One_Image.webp";
import Page_One_Icon from "../assets/Images/Page_One_Icon.svg";

import Page_Two_Image from "../assets/Images/Page_Two_Image.webp";
import Page_Two_Icon from "../assets/Images/Page_Two_Icon.svg";

import Page_Three_Image from "../assets/Images/Page_Three_Image.webp";
import Page_Three_Icon from "../assets/Images/Page_Three_Icon.svg";
import CommentsCards from "./CommentsCards";

function App() {
  return (
    <Fragment>
      <main className="main overflow-x-hidden w-full h-full bg-[url('https://assets-global.website-files.com/654642f8b348306163b5ff9c/654653362e267b5cefd2a9fa_Hero.webp')] bg-cover bg-center bg-no-repeat bg-fixed font-dmsans">
        <Navbar />

        <div className="main_page bg-[#0000004d]  w-full h-[100vh] flex flex-col items-start justify-center gap-8 px-8 xl:px-16">
          <Heading text="Secure. Simple. Easy to Use." />
          <Paragraph text="Innovative banking app that revolutionizes the way you manage your finances" />
          <Button text="Get The App" href="" />
        </div>

        <PageContent
          flex="flex-col-reverse sm:flex-row"
          image={Page_One_Image}
          icon={Page_One_Icon}
          heading="A Simple Way to Manage Your Financial"
          title="Lorem ipsum dolor sit amet consectetur. Nunc amet cras accumsan vitae. Quis in quis volutpat mi in"
        />

        <PageContent
          flex="flex-col-reverse sm:flex-row-reverse"
          image={Page_Two_Image}
          icon={Page_Two_Icon}
          heading="Keeps Your Data Private"
          title="Lorem ipsum dolor sit amet consectetur. Nunc amet cras accumsan vitae. Quis in quis volutpat mi in"
        />

        <PageContent
          flex="flex-col-reverse sm:flex-row"
          image={Page_Three_Image}
          icon={Page_Three_Icon}
          heading="Automating Your Money"
          title="Lorem ipsum dolor sit amet consectetur. Nunc amet cras accumsan vitae. Quis in quis volutpat mi in"
        />

        <div className="page_four w-full h-full flex flex-col justify-center items-center py-20 bg-[#000]">
          <SpecialHeading
            leftText="Big on"
            specialText="features."
            centerText="Deceptively simple"
            lineBreak={<br />}
          />
          <div className="flex flex-wrap justify-center items-center gap-12 w-full py-10 px-6 cursor-pointer">
            <SpecialCard />
          </div>
        </div>

        <div className="page_four w-full h-full flex flex-col justify-center items-center py-20 bg-[#000]">
          <SpecialHeading
            leftText="Their"
            specialText="words"
            centerText=" speak for us."
            lineBreak={""}
          />
          <div className="w-full bg-clip-border cursor-pointer relative p-5">
            <div className="flex flex-nowrap items-center justify-center gap-x-6 gap-y-6 overflow-x-auto overflow-y-hidden px-8 pb-10 pt-10">
              <div className="absolute z-10 left-0 top-0 bottom-0 w-24 h-full bg-gradient-to-r from-black to-transparent"></div>
              <CommentsCards />
              <div className="absolute z-10 right-0 top-0 bottom-0 w-24 h-full bg-gradient-to-l from-black to-transparent"></div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
