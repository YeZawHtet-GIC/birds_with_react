import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import BirdDetails from "./BirdDetails";
import Bird from "./Bird";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
       index:true,
        element: <Home />,
      },
      {
        path: "/birds",
        element: <Bird />,
      },
      {
        path: "/bird/:id",
        element: <BirdDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
