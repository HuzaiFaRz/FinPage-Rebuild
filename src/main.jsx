// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "../index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
// import Navbar from "./Components/Navbar";
// import StyleGuid from "./Components/StyleGuid";
// import License from "./Components/License";
// import ChangeLog from "./Components/ChangeLog";
// import Error from "./Components/Error";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       },
//       {
//         path: "StyleGuide",
//         element: <StyleGuid />,
//       },
//       {
//         path: "License",
//         element: <License />,
//       },
//       {
//         path: "ChangeLog",
//         element: <ChangeLog />,
//       },
//     ],
//   },
// ]);
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)