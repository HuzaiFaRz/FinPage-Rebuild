import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import StyleGuid from "./StyleGuid";
import License from "./License";
import Changelog from "./ChangeLog";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "StyleGuide",
        element: <StyleGuid />,
      },
      {
        path: "License",
        element: <License />,
      },
      {
        path: "Changelog",
        element: <Changelog />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
