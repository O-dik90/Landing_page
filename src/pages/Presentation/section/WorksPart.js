import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/AddCircle";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// Images
import itemData from "pages/LandingPages/Gallery/data/index.js";

function WorksPart() {
    const ImageCollect = (
        <Grid item mx={{ md: "auto" }}>
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
        <MKBox
            component="section"
            variant="gradient"
            bgColor="dark"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
            mx={0}
        >
            <Container>
                <Grid container>
                    <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                        <MKTypography variant="h3" color="white">
                            Our Works
                        </MKTypography>
                        <MKTypography variant="body2" color="white" opacity={0.8}>
                            We are always highly dedicated to every project entrusted to us
                            {/* There &apos; s nothing I really wanted to do in life that I wasn&apos;t
                            able to get good at. That &apos; s my skill. */}
                        </MKTypography>
                    </Grid>
                </Grid>
                {ImageCollect}
                {/* <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                            <MKBox mb={1}>
                            <HorizontalTeamCard
                                image={team1}
                                name="Web Series"
                                // position={{ color: "info", label: "UI Designer" }}
                                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                            />
                            </MKBox>
                        </Grid>
                    </Grid> */}
                <Grid
                    item
                    xs={12}
                    lg={5}
                    my={{ xs: 5, lg: 5 }}
                    mr={{ xs: 0, lg: "auto" }}
                    sx={{ textAlign: { xs: "center" } }}
                >
                    <MKButton
                        color="default"
                        sx={{ color: ({ palette: { dark } }) => dark.main }}
                        disabled
                    >
                        <MKTypography variant="body2">Show More</MKTypography>
                    </MKButton>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default WorksPart;
