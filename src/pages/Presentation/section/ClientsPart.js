import { ImageList, ImageListItem } from "@mui/material";

// @mui material components
import Container from "@mui/material/Container";
// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// Images
import dataClientLogo from "pages/Presentation/data/index";

function ClientsPart() {
    const clientCollect = dataClientLogo.map((itemLogo, index) => (
        <Grid
            item
            key={index}
            xs={6}
            md={3}
            lg={2}
            display="flex"
            mx="auto"
            alignItems="baseline"
            justifyContent="center"
            my={2}
        >
            <MKBox
                component="img"
                src={itemLogo.img}
                alt={itemLogo?.title}
                width="auto"
                height={itemLogo?.height === true ? "35px" : "65px"}
                opacity={1}
                px={0}
                // my={2}
            />
        </Grid>
    ));
    return (
        <MKBox component="section" pt={10} pb={8}>
            <Container>
                <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
                    {clientCollect}
                    {/* <Grid item xs={2} md={2} mx={2} alignContent="center" alignItems="center">
                        <MKBox component="img" src={ovo} alt="nasa" width="100%" />
                    </Grid> */}
                    {/* <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
                        <Grid item xs={12} md={3}>
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
                        </Grid>
                    </Grid> */}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default ClientsPart;
