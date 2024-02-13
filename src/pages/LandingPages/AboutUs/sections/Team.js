/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

import bgImage from "assets/images/ABOUT_US_2.png";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      my={3}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.5),
            rgba(gradients.dark.state, 0.9)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              VISION
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Our vision is "to become one of the professional production houses in Indonesia that
              is capable of creating the best quality of work
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Mission
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Our mission is "to always work wholeheartedly so that every work that is born can have
              an impact on the audience"
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
