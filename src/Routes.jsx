import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopOne from "pages/DesktopOne";
import DesktopThree from "pages/DesktopThree";
import DesktopTwo from "pages/DesktopTwo";
import DesktopFour from "pages/DesktopFour";
import DesktopFive from "pages/DesktopFive";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopone",
      element: <DesktopOne />,
    },
    {
      path: "desktopthree",
      element: <DesktopThree />,
    },
    {
      path: "desktoptwo",
      element: <DesktopTwo />,
    },
    {
      path: "desktopfour",
      element: <DesktopFour />,
    },
    {
      path: "desktopfive",
      element: <DesktopFive />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
