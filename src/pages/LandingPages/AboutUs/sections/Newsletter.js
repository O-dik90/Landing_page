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

function Newsletter() {
  return (
    <MKBox component="section" pt={1} my={2}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} md={5} sx={{ mx: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={about} alt="macbook" width="100%" borderRadius="lg" />
            </MKBox>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
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
              Where Stories Come To Life
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

export default Newsletter;
