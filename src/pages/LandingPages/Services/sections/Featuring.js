// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Featuring() {
    return (
        <MKBox component="section" py={6}>
            <Container>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12}>
                        <MKTypography variant="h4" color="dark" mb={3}>
                            Our Scope
                        </MKTypography>
                        <Grid container justifyContent="flex-start">
                            <Grid item xs={12} md={3}>
                                <MKBox mb={5}>
                                    <DefaultInfoCard
                                        icon="science"
                                        title="Research and Insights"
                                        description="Analyzing market trends for story relevance."
                                    />
                                </MKBox>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <MKBox mb={5}>
                                    <DefaultInfoCard
                                        icon="emoji_objects"
                                        title="Ideation"
                                        description="Creating unique ideas tailored to you."
                                    />
                                </MKBox>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <MKBox mb={{ xs: 5, md: 0 }}>
                                    <DefaultInfoCard
                                        icon="inventory"
                                        title="Planning and Writing"
                                        description="Crafting stories with depth and design."
                                    />
                                </MKBox>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <MKBox mb={{ xs: 5, md: 0 }}>
                                    <DefaultInfoCard
                                        icon="apps"
                                        title="Project Preparation"
                                        description="Prepping for smooth production transition."
                                    />
                                </MKBox>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <MKBox mb={{ xs: 5, md: 0 }}>
                                    <DefaultInfoCard
                                        icon="production_quantity_limits"
                                        title="Production"
                                        description="Overseeing quality visuals & direction."
                                    />
                                </MKBox>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <MKBox mb={{ xs: 5, md: 0 }}>
                                    <DefaultInfoCard
                                        icon="pages"
                                        title="Post Production"
                                        description="Enhancing visuals, sound, and style."
                                    />
                                </MKBox>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <MKBox mb={{ xs: 5, md: 0 }}>
                                    <DefaultInfoCard
                                        icon="local_post_office"
                                        title="Content Delivery"
                                        description="Distributing content on key platforms."
                                    />
                                </MKBox>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Featuring;
