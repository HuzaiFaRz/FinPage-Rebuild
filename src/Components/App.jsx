import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";
import PageTwoContent from "./Page-Two-Content";

function App() {
  return (
    <Fragment>
      <main className="main w-full h-full bg-[url('https://assets-global.website-files.com/654642f8b348306163b5ff9c/654653362e267b5cefd2a9fa_Hero.webp')] bg-cover bg-center bg-no-repeat bg-fixed font-dmsans">
        <Navbar />

        <div className="main_page bg-[#0000004d]  w-full h-[100vh] flex flex-col items-start justify-center gap-8 px-8 xl:px-16">
          <Heading text="Secure. Simple. Easy to Use." />
          <Paragraph text="Innovative banking app that revolutionizes the way you manage your finances" />
          <Button text="Get The App" href="" />
        </div>

        <PageTwoContent />
      </main>
    </Fragment>
  );
}

export default App;
