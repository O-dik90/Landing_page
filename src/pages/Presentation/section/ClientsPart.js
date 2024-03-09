// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ImageList, ImageListItem } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
import dataClientLogo from "pages/Presentation/data/index";

function ClientsPart() {
  const clientCollect = dataClientLogo.map((itemLogo) => (
    // <Grid item xs={2} p={2} key={itemLogo.id_client}>
    //   {/* //   <MKBox
    // //     component="img"
    // //     src={itemLogo.img}
    // //     alt={itemLogo?.title}
    // //     width="100%"
    // //     height="auto"
    // //     opacity={1}
    // //   /> */}
    <ImageListItem key={itemLogo.Id}>
      <img
        srcSet={`${itemLogo.img}?w=164&h=164&fit=crop&auto=format&dpr=2 1x`}
        src={`${itemLogo.img}?w=164&h=164&fit=crop&auto=format`}
        alt={itemLogo.title}
        loading="lazy"
      />
    </ImageListItem>
    // </Grid>
  ));
  return (
    <MKBox component="section" pt={10} pb={8}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          {/* <Grid item xs={2} md={2} mx={2} alignContent="center" alignItems="center">
            <MKBox component="img" src={ovo} alt="nasa" width="100%" />
          </Grid> */}
          <ImageList
            variant="masonry"
            gap={8}
            mt={2}
            sx={{
              height: "auto",
              columnCount: {
                xs: "6 !important",
                md: "8 !important",
                lg: "10 !important",
              },
            }}
          >
            {clientCollect}
          </ImageList>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          {/* <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={200}
              suffix="+"
              separator=","
              title="Projects"
              description="Of “high-performing” level are led by a certified project manager"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              description="Actively engage team members that finishes on time"
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ClientsPart;
