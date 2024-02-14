import React from "react";
import Icon from "@mui/material/Icon";

// @mui icons
//import GitHubIcon from "@mui/icons-material/GitHub";
import Inventory2Icon from "@mui/icons-material/Inventory2";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Gallery from "layouts/pages/landing-pages/gallery";
import Services from "layouts/pages/landing-pages/services";
import Work from "layouts/pages/landing-pages/work";

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
          //   name: "works",
          //   route: "/pages/landing-pages/work",
          //   component: <Work />,
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
    name: "Gallery",
    icon: <Inventory2Icon />,
    route: "/pages/landing-pages/gallery",
    component: <Gallery />,
  },
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "https://www.github.com/creativetimofficial/material-kit-react",
  // },
];

export default routes;
