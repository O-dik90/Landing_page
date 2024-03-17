import { Link, WhatsApp } from "@mui/icons-material";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
// Material Kit 2 React components
import MKTypography from "components/MKTypography";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
// Images
import logoCT from "assets/images/logos/ops/logo_ops_color.svg";

const date = new Date().getFullYear();

export default {
    brand: {
        name: "ONE PECKER STUDIO",
        image: logoCT,
        route: "/",
    },
    socials: [
        {
            icon: <FacebookIcon />,
            link: "https://www.facebook.com/onepeckerstudio",
        },
        {
            icon: <TwitterIcon />,
            link: "https://twitter.com/onepeckerstudio",
        },
        {
            icon: <YouTubeIcon />,
            link: "https://www.youtube.com/@onepeckerstudio",
        },
        {
            icon: <WhatsApp />,
            link: "https://api.whatsapp.com/send/?phone=6285743355062&text&type=phone_number&app_absent=0",
        },
        {
            icon: <Link />,
            link: "https://linktr.ee/onepeckerstudio",
        },
    ],
    menus: [
        {
            name: "company",
            items: [
                { name: "about us", href: "#" },
                { name: "freebies", href: "#" },
                { name: "premium tools", href: "#" },
                { name: "blog", href: "#" },
            ],
        },
        {
            name: "help & support",
            items: [
                { name: "contact us", href: "#" },
                { name: "knowledge center", href: "#" },
                { name: "custom development", href: "#" },
                { name: "sponsorships", href: "#" },
            ],
        },
    ],
    copyright: (
        <MKTypography variant="button" fontWeight="regular">
            All rights reserved. Copyright &copy; {date}{" "}
            <MKTypography
                //component="a"
                //href="#"
                // target="_blank"
                rel="noreferrer"
                variant="button"
                fontWeight="regular"
            >
                ONE PECKER TEAM
            </MKTypography>
            .
        </MKTypography>
    ),
};
