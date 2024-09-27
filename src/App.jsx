import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <Fragment>
      <main
        className="bg-[url('.\assets\Main_Bg.webp')] bg-cover bg-center bg-no-repeat bg-scroll 
      
      w-full h-screen font-dmsans"
      >
        <Navbar />
      </main>
    </Fragment>
  );
}

export default App;
