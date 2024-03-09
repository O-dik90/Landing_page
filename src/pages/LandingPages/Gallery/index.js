// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { ButtonGroup, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import itemData from "pages/LandingPages/Work/data/index.js";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

// Images
import bgImage from "assets/images/cover/bg-sign-in-basic.jpeg";

function Gallery() {
  const ImageCollect = (
    <Grid my={6} pb={10} item mx={{ md: "auto", xl: 10 }}>
      <ImageList
        variant="masonry"
        gap={5}
        mt={2}
        sx={{
          columnCount: {
            xs: "1 !important",
            sm: "2 !important",
            md: "3 !important",
            lg: "4 !important",
            // xl: "5 !important",
          },
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.image}>
            <img
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              // title={item.title}
              // subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );

  return (
    <>
      <DefaultNavbar routes={routes} dark sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
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
        <Grid
          container
          item
          md={7}
          my={12}
          justifyContent="center"
          alignItems="center"
          mx="auto"
          textAlign="center"
          direction="column"
        >
          <ButtonGroup>
            <MKButton type="button" variant="gradient" color="info">
              All
            </MKButton>
            <MKButton type="button" variant="gradient" color="info" disabled>
              TVC
            </MKButton>
            <MKButton type="button" variant="gradient" color="info" disabled>
              Film / Series
            </MKButton>
          </ButtonGroup>
        </Grid>
        {ImageCollect}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Gallery;
