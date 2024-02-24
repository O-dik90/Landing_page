// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import GalleryCards from "examples/Cards/GalleryCards/index";

import data from "pages/LandingPages/Gallery/data/index";

function GalleryContents() {
  const renderData = data.map(({ title, description, items }, index) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={index}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ name, image, route }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={`item-${name}`}>
              <GalleryCards name={name} image={image} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={2}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 8, mx: "auto", px: 0.75 }}
        >
          <MKBadge variant="contained" color="info" container sx={{ mb: 2 }} />
          <MKTypography variant="h2" fontWeight="bold">
            Huge collection of sections
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We have created multiple options for you to put together and customise into pixel
            perfect pages.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default GalleryContents;
