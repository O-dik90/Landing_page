// Presentation page components
import BuiltByDevelopers from "pages/Presentation/BuiltByDevelopers";
import Card from "@mui/material/Card";
import ClientsPart from "pages/Presentation/section/ClientsPart";
import Container from "@mui/material/Container";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Spasing from "./section/Spasing";
import WorksPart from "./section/WorksPart";
// Images
import bgImage from "assets/images/cover/bg_landing_rev.jpg";
import footerRoutes from "footer.routes";
// Routes
import routes from "routes";

function Presentation() {
    return (
        <>
            <DefaultNavbar routes={routes} sticky />
            <MKBox
                minHeight="80vh"
                width="100%"
                sx={{
                    backgroundImage: ({
                        functions: { linearGradient, rgba },
                        palette: { gradients },
                    }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0),
                            rgba(gradients.dark.state, 1)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={8}
                        md={6}
                        py={22}
                        direction="column"
                        alignItems="flex-start"
                    >
                        <MKTypography variant="body1" color="white" mt={5}>
                            Welcome to
                        </MKTypography>
                        <MKTypography
                            variant="h1"
                            color="white"
                            my={1}
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            One Pecker Studio.
                        </MKTypography>
                        <MKTypography variant="body2" color="white" mt={1} mb={1}>
                            Based in South Jakarta, Indonesia. We produce professional videos for
                            brands and governments.
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>
            <Card
                sx={{
                    py: 4,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Container mb={10}>
                    <BuiltByDevelopers />
                </Container>
                {/* <Container sx={{ mt: 2, mb: 10 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                            <FilledInfoCard
                                variant="gradient"
                                color="info"
                                icon="flag"
                                title="Our Working Space"
                                description="Check the possible ways of working with our product for building your own project."
                                action={{
                                    type: "internal",
                                    route: "/pages/landing-pages/work",
                                    label: "Read More",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FilledInfoCard
                                color="info"
                                icon="precision_manufacturing"
                                title="Services"
                                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                                action={{
                                    type: "internal",
                                    route: "/pages/landing-pages/services",
                                    label: "Read more",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container> */}
                <WorksPart />
                <ClientsPart />
                <Spasing />
                <Container>
                    <Grid container justifyContent="center" my={5}>
                        {/* <MKTypography variant="h3" pb={2}>
                            Contact Us
                        </MKTypography> */}
                        <Grid container>
                            <Grid item xs={12} md={5}>
                                <MKBox position="relative">
                                    <MKBox
                                        component="img"
                                        src={bgImage}
                                        alt="about"
                                        width="100%"
                                        borderRadius="lg"
                                    />
                                </MKBox>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                p={0}
                                sx={{
                                    mt: { xs: 3 },
                                    mx: { xs: 0, lg: "auto" },
                                    mb: { xs: 2, md: 0 },
                                }}
                            >
                                <MKTypography
                                    variant="h4"
                                    sx={({ breakpoints, typography: { size } }) => ({
                                        [breakpoints.down("md")]: {
                                            fontSize: size["3xl"],
                                        },
                                    })}
                                >
                                    Contact Us
                                </MKTypography>
                                <MKTypography variant="body2" color="text" mb={2}>
                                    Whether you’re a client looking for a production partner, a
                                    budding storyteller, or someone simply moved by our mission, we
                                    want to hear from you!
                                </MKTypography>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                        <MKTypography variant="h6" color="text">
                                            Office 1
                                        </MKTypography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <MKTypography variant="body2" color="text">
                                            Ampera Raya, Jakarta, DKI Jakarta, Jakarta Selatan 12540
                                        </MKTypography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                        <MKTypography variant="h6" color="text">
                                            Office 2
                                        </MKTypography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <MKTypography variant="body2" color="text">
                                            Rt 001/Rw 010 Brangkali, Sukorini, Manisrenggo, Klaten,
                                            Jawa Tengah
                                        </MKTypography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                        <MKTypography variant="h6" color="text">
                                            Email
                                        </MKTypography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <MKTypography
                                            component={Link}
                                            to="mailto:onepecker@gmail.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            variant="body2"
                                            color="info"
                                        >
                                            onepeckerstudio@gmail.com
                                        </MKTypography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                        <MKTypography variant="h6" color="text">
                                            Phone
                                        </MKTypography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <MKTypography
                                            component={Link}
                                            to="https://api.whatsapp.com/send/?phone=6285743355062&text&type=phone_number&app_absent=0"
                                            target="_blank"
                                            rel="noreferrer"
                                            variant="body2"
                                            color="info"
                                        >
                                            +62 857 4335 5062
                                        </MKTypography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default Presentation;
