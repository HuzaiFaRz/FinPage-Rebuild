import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Button from "./Button";
import Paragraph from "./Paragraph";

function App() {
  return (
    <Fragment>
      <main className="main z-10 bg-[url('./assets/Main_Bg.webp')] bg-cover bg-center bg-no-repeat bg-scroll w-full h-screen font-dmsans">
        <div className="main_overlay w-full h-screen bg-[#0000004d] flex flex-col items-center justify-between ">
          <Navbar />
          <div className="main_page w-full flex flex-col items-start justify-center h-full gap-8  px-8 xl:px-16">
            <Heading text="Secure. Simple. Easy to Use." />
            <Paragraph text="Innovative banking app that revolutionizes the way you manage your finances" />
            <Button text="Get The App" href="" />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
