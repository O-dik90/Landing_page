// @mui material components
import Card from "@mui/material/Card";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import GalleryContents from "pages/LandingPages/Work/section/GalleryContents";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// Images
import bgImage from "assets/images/cover/bg_gallery.png";
import footerRoutes from "footer.routes";
// Routes
import routes from "routes";

function Works() {
  return (
    <>
      <DefaultNavbar routes={routes} dark sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.2),
              rgba(gradients.dark.state, 0.9)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      ></MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -4,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <GalleryContents />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Works;
