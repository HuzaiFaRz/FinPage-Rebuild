import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <Fragment>
      <main className="bg-Main_Bg bg-cover bg-center bg-no-repeat bg-scroll w-full h-screen saturate-100 font-dmsans">
        <Navbar />
      </main>
    </Fragment>
  );
}

export default App;
