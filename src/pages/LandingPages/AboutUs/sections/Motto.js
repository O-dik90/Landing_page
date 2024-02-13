// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Motto() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 6 }}>
      <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
        <Grid
          container
          item
          xs={12}
          md={7}
          justifyContent="center"
          mx="auto"
          textAlign="center"
          direction="column"
        >
          <MKTypography variant="h4" color="dark">
            Our motto
          </MKTypography>
          <MKTypography variant="h1" color="info" mb={6}>
            #TerusTumbuhdanSemakinKokoh
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Motto;
