// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import about from "assets/images/ABOUT_US_1.png";

function Information() {
  return (
    <MKBox component="section" pt={1} my={0}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={10} md={7} ml={{ xs: "auto" }} mr={{ xs: "auto" }}>
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="none"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              py={6}
              mx={3}
            >
              <MKBox
                variant="gradient"
                bgColor="info"
                coloredShadow="info"
                borderRadius="lg"
                p={2}
                mx={2}
                mt={-3}
              >
                <MKTypography variant="h3" color="white">
                  Contact us
                </MKTypography>
              </MKBox>
              <MKBox p={3}>
                <MKTypography variant="body2" color="text" mb={3}>
                  For further questions, including partnership opportunities, please email
                  hello@creative-tim.com or contact using our contact form.
                </MKTypography>
                <MKBox width="100%" component="form" method="post" autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label="Full Name"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        type="email"
                        variant="standard"
                        label="Email"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        label="What can we help you?"
                        placeholder="Describe your problem in at least 250 characters"
                        InputLabelProps={{ shrink: true }}
                        multiline
                        fullWidth
                        rows={6}
                      />
                    </Grid>
                  </Grid>
                  <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                    <MKButton type="submit" variant="gradient" color="info">
                      Send Message
                    </MKButton>
                  </Grid>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ mt: { xs: 3 }, mx: { xs: 0, lg: "auto" }, mb: { xs: 2, md: 0 } }}
          >
            <MKTypography
              variant="h2"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Our Office
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              One Pecker Studio is a production company and content studio dedicated to creating
              films, television series, and branded content. Our award-winning works are designed to
              entertain, inspire, and foster meaningful conversations. We believe in the power of
              storytelling to connect and resonate with audiences worldwide.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
