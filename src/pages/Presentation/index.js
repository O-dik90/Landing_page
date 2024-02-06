import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKButton from "components/MKButton";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

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
        minHeight="75vh"
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
          <Grid container item xs={12} lg={8} justifyContent="center" mx="auto">
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, md: 8, lg: 12 }}
              mt={32}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["md"],
                },
              })}
            >
              Welcome to One Pecker Studio.
            </MKTypography>
            <MKTypography
              variant="h1"
              color="white"
              textAlign="center"
              mt={1}
              mb={1}
              px={{ xs: 2 }}
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
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 1, lg: 4 }}
              mt={1}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["md"],
                },
              })}
            >
              Based in South Jakarta, Indonesia. We produce professional videos for brands and
              governments.
            </MKTypography>
            <Grid container justifyContent="center" mb={5}>
              <MKButton
                component="a"
                href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                target="_blank"
                color="secondary"
                sx={{ m: 1 }}
              >
                <i className="fab fa-twitter" />
                &nbsp;About Us
              </MKButton>
              <MKButton
                component="a"
                href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                target="_blank"
                color="danger"
                sx={{ m: 1 }}
              >
                <i className="fab fa-twitter" />
                &nbsp;Get In Touch
              </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 1,
          mx: { xs: 2, lg: 2 },
          mt: -4,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 1),
          backdropFilter: "saturate(200%) blur(40px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container sx={{ mt: 2 }}>
          <BuiltByDevelopers />
        </Container>
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Our Working Space"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
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
        <MKBox pt={6} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h5" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mx: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mx: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
