// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Information() {
    return (
        <MKBox component="section" py={6}>
            <Container xs={12} sx={{ position: "relative", zIndex: 2, py: 0 }}>
                <Grid
                    container
                    item
                    md={7}
                    justifyContent="center"
                    mx="auto"
                    textAlign="center"
                    direction="column"
                >
                    <MKTypography variant="h2" color="dark">
                        What we do?
                    </MKTypography>
                    <MKTypography
                        variant="body2"
                        color="dark"
                        mb={6}
                        sx={({ breakpoints, typography: { size } }) => ({
                            [breakpoints.down("md")]: {
                                fontSize: size["xl"],
                            },
                        })}
                    >
                        We provide all creative needs from idea development, production and
                        post-production. Such as film making, advertising, campaign videos, graphic
                        design, animation, offline/online video editing, photography services, and
                        many more. We are committed to providing original work with high
                        professionalism and creativity.
                    </MKTypography>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Information;
