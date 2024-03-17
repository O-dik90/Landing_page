// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import LOGO from "assets/images/logos/ops/logo_ops_white.svg";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/cover/bg-blue.png";

function BuiltByDevelopers() {
  // const bgImage = "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={10}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0),
            rgba(gradients.dark.state, 0.5)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container justifyContent="start" spacing={4}>
          <Grid container item xs={12} md={4} lg={2} sx={{ ml: { xs: 0, lg: 6 } }}>
            <MKBox component="img" src={LOGO} alt="logo" width="100%" />
          </Grid>
          <Grid container item xs={12} md={8} sx={{ ml: { xs: 0, lg: 6 } }}>
            {/* <MKTypography
                            variant="h4"
                            color="white"
                            fontWeight="bold"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["md"],
                                },
                            })}
                        >
                            What We Do
                        </MKTypography> */}
            <MKTypography
              variant="h2"
              color="white"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("lg")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              We are a professional production house and content studio.
            </MKTypography>
            {/* <MKTypography variant="body2" color="white" opacity={0.8} mb={2}>
                            From colors, cards, typography to complex elements, you will find the
                            full documentation. Play with the utility classes and you will create
                            unlimited combinations for our components.
                        </MKTypography> */}
            <MKTypography
              component="a"
              href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="white"
              fontWeight="regular"
              sx={{
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: `translateX(3px)`,
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: `translateX(6px)`,
                },
              }}
            ></MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
