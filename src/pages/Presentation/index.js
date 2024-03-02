import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/BuiltByDevelopers";
import ClientsPart from "pages/Presentation/section/ClientsPart";
import WorksPart from "./section/WorksPart";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/SAMPUL_2.png";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="80vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
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
          <Grid container item xs={8} md={6} py={22} direction="column" alignItems="flex-start">
            <MKTypography variant="body1" color="white" mt={5}>
              Welcome to One Pecker Studio.
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
              Professional
              <br />
              Production House
            </MKTypography>
            <MKTypography variant="body2" color="white" mt={1} mb={1}>
              Based in South Jakarta, Indonesia. We produce professional videos for brands and
              governments.
            </MKTypography>
            {/* <Grid container mb={5}>
              <MKButton
                component="a"
                href="#"
                target="_blank"
                color="secondary"
                sx={{ m: 1 }}
                size="small"
              >
                <MKTypography variant="body2" color="white">
                  About Us
                </MKTypography>
              </MKButton>
              <MKButton
                component="a"
                href="#"
                target="_blank"
                color="danger"
                size="small"
                sx={{ m: 1 }}
              >
                <MKTypography variant="body2">Get In Touch</MKTypography>
              </MKButton>
            </Grid> */}
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          pt: 10,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <BuiltByDevelopers />
        </Container>
        <Container sx={{ mt: 2, mb: 10 }}>
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
        </Container>
        <WorksPart />
        <ClientsPart />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
