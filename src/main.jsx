import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Navbar from "./Components/Navbar";
import StyleGuid from "./Components/StyleGuid";
import License from "./Components/License";
import Changelog from "./Components/Changelog";
import Error from "./Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "styleguide",
        element: <StyleGuid />,
      },
      {
        path: "license",
        element: <License />,
      },
      {
        path: "changelog",
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
