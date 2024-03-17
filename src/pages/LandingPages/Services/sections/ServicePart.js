// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Stack from "@mui/material/Stack";

function ServicePart() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              Read More About Our Service
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              Pain is what we go through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes harder for us to give
              others a hand.
            </MKTypography>
            <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <Grid item xs={2} lg="auto">
                  <MKBox
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon fontSize="small">tv</Icon>
                  </MKBox>
                </Grid>
                <MKBox display="column">
                  <MKTypography variant="h6" color="text" pl={2}>
                    FILM / WEB SERIES
                  </MKTypography>
                  <MKTypography variant="body2" color="text" pl={2}>
                    Films that are full of emotion and <br /> can leave an impression on the
                    audience's.
                  </MKTypography>
                </MKBox>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <Grid item xs={2} lg="auto">
                  <MKBox
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon fontSize="small">tv</Icon>
                  </MKBox>
                </Grid>
                <MKBox display="column">
                  <MKTypography variant="h6" color="text" pl={2}>
                    TVC / DIGITAL VIDEO
                  </MKTypography>
                  <MKTypography variant="body2" color="text" pl={2}>
                    Create fresh television ads and digital videos for brands.
                  </MKTypography>
                </MKBox>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <Grid item xs={2} lg="auto">
                  <MKBox
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon fontSize="small">find_in_page</Icon>
                  </MKBox>
                </Grid>
                <MKBox display="column">
                  <MKTypography variant="h6" color="text" pl={2}>
                    DOCUMENTARY / TRAVEL VIDEOS
                  </MKTypography>
                  <MKTypography variant="body2" color="text" pl={2}>
                    Ready to take on history and travel the world.
                  </MKTypography>
                </MKBox>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <Grid item xs={2} lg="auto">
                  <MKBox
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon fontSize="small">auto_graph</Icon>
                  </MKBox>
                </Grid>
                <MKBox display="column">
                  <MKTypography variant="h6" color="text" pl={2}>
                    INFOGRAPHIC / ANIMATION VIDEOS
                  </MKTypography>
                  <MKTypography variant="body2" color="text" pl={2}>
                    Create fun animations that everyone can enjoy.
                  </MKTypography>
                </MKBox>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <Grid item xs={2} lg="auto">
                  <MKBox
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon fontSize="small">business</Icon>
                  </MKBox>
                </Grid>
                <MKBox display="column">
                  <MKTypography variant="h6" color="text" pl={2}>
                    COMPANY PROFILE
                  </MKTypography>
                  <MKTypography variant="body2" color="text" pl={2}>
                    Wrapping the company to look strong and successful.
                  </MKTypography>
                </MKBox>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <Grid item xs={2} lg="auto">
                  <MKBox
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon fontSize="small">play_arrow</Icon>
                  </MKBox>
                </Grid>
                <MKBox display="column">
                  <MKTypography variant="h6" color="text" pl={2}>
                    MUSIC VIDEO
                  </MKTypography>
                  <MKTypography variant="body2" color="text" pl={2}>
                    Help convey the song's message through the best visuals.
                  </MKTypography>
                </MKBox>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <Grid item xs={2} lg="auto">
                  <MKBox
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon fontSize="small">emoji_objects</Icon>
                  </MKBox>
                </Grid>
                <MKBox display="column">
                  <MKTypography variant="h6" color="text" pl={2}>
                    CREATIVE CONTENT
                  </MKTypography>
                  <MKTypography variant="body2" color="text" pl={2}>
                    Create fresh video content that has the potential to go viral on social media
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ServicePart;
