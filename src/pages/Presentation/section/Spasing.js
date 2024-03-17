/* eslint-disable prettier/prettier */
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
// Material Kit 2 React examples
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/nikon.jpg";
// Images

function Spasing() {
    return (
        <MKBox
            component="section"
            variant="gradient"
            bgColor="dark"
            position="relative"
            py={6}
            my={6}
            px={{ xs: 2, lg: 0 }}
            mx={0}
            sx={{
                backgroundImage: ({
                    functions: { linearGradient, rgba },
                    palette: { gradients },
                }) =>
                    `${linearGradient(
                        rgba(gradients.dark.main, 0.5),
                        rgba(gradients.dark.state, 0.9)
                    )}, url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                display: "grid",
                placeItems: "center",
            }}
        >
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{ my: 10 }}>
                        <MKTypography variant="h3" color="white" pb={2}>
                            LET&apos;S CREATE TOGETHER!
                        </MKTypography>
                        <MKButton
                            color="info"
                            sx={{ color: ({ palette: { dark } }) => dark.main }}
                            disabled
                        >
                            <MKTypography variant="body2" color="white">Create Project</MKTypography>
                        </MKButton>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Spasing;
