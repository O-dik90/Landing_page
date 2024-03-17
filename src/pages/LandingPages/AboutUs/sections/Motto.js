// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Tooltip from "@mui/material/Tooltip";
// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Motto() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 6 }}>
      <Container xs={12} sx={{ position: "relative", zIndex: 2, py: 12 }}>
        <Grid
          container
          item
          md={7}
          justifyContent="center"
          mx="auto"
          textAlign="center"
          direction="column"
        >
          <MKTypography variant="h4" color="dark">
            Our motto
          </MKTypography>
          <MKTypography
            variant="h1"
            color="info"
            mb={6}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["xl"],
              },
            })}
          >
            #TerusTumbuhdanSemakinKokoh
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Motto;
