import Card from "@mui/material/Card";
// @mui material components
import Container from "@mui/material/Container";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/Services/sections/Featuring";
import Grid from "@mui/material/Grid";
// About Us page sections
import Information from "pages/LandingPages/Services/sections/Information";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Mission from "./sections/Mission";
import ServicePart from "./sections/ServicePart";
// Images
import bgImage from "assets/images/cover/bg_services.png";
import footerRoutes from "footer.routes";
// Routes
import routes from "routes";

// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

function Services() {
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
                        xs={12}
                        lg={8}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    ></Grid>
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
                <Featuring />
                <Mission />
                <ServicePart />
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default Services;
