import Card from "@mui/material/Card";
// @mui material components
import Container from "@mui/material/Container";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Grid from "@mui/material/Grid";
import Information from "./sections/Information";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Mission from "./sections/Mission";
import Motto from "./sections/Motto";
// Images
import bgImage from "assets/images/cover/bg_aboutus.png";
import footerRoutes from "footer.routes";
// Routes
import routes from "routes";

function AboutUs() {
    return (
        <>
            <DefaultNavbar routes={routes} dark sticky />
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: ({
                        functions: { linearGradient, rgba },
                        palette: { gradients },
                    }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
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
                        py={"auto"}
                        xs={8}
                        lg={6}
                        alignItems="flex-start"
                        flexDirection="column"
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            Work with <br /> an amazing design
                        </MKTypography>
                        <MKTypography variant="body2" color="white" opacity={0.8} mt={1} mb={3}>
                            We&apos;re constantly trying to express ourselves and actualize our
                            dreams. If you have the opportunity to play this game
                        </MKTypography>
                        <MKTypography variant="h6" color="white" mt={2} mb={1}>
                            Find us on
                        </MKTypography>
                        <MKBox display="flex" justifyContent="center" alignItems="center">
                            <MKTypography
                                component="a"
                                variant="body1"
                                color="white"
                                href="https://www.facebook.com/onepeckerstudio"
                                mr={3}
                            >
                                <i className="fab fa-facebook" />
                            </MKTypography>
                            <MKTypography
                                component="a"
                                variant="body1"
                                color="white"
                                href="https://twitter.com/onepeckerstudio"
                                mr={3}
                            >
                                <i className="fab fa-twitter" />
                            </MKTypography>
                            <MKTypography
                                component="a"
                                variant="body1"
                                color="white"
                                href="https://www.instagram.com/onepeckerstudio"
                                mr={3}
                            >
                                <i className="fab fa-instagram" />
                            </MKTypography>
                            <MKTypography
                                component="a"
                                variant="body1"
                                color="white"
                                href="mailto:onepecker@gmail.com"
                            >
                                <i className="fab fa-google-plus" />
                            </MKTypography>
                        </MKBox>
                    </Grid>
                </Container>
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -4,
                    mb: 4,
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Information />
                <Mission />
                <Motto />
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default AboutUs;
