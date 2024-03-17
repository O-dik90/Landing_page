// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Icon from "@mui/material/Icon";
import Inventory2Icon from "@mui/icons-material/Inventory2";
// @mui icons
import Link from "@mui/icons-material/Link";
import React from "react";
// import Gallery from "layouts/pages/landing-pages/gallery";
import Services from "layouts/pages/landing-pages/services";
import Works from "layouts/pages/landing-pages/work";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        collapse: [
          // {
          //   name: "gallery",
          //   route: "/pages/landing-pages/work",
          //   component: <Works />,
          // },
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "services",
            route: "/pages/landing-pages/services",
            component: <Services />,
          },
          {
            name: "contact",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
        ],
      },
    ],
  },
  {
    name: "Works",
    icon: <Inventory2Icon />,
    route: "/pages/landing-pages/work",
    component: <Works />,
  },
  {
    name: "Linktree",
    icon: <Link />,
    href: "https://linktr.ee/onepeckerstudio",
  },
];

export default routes;
