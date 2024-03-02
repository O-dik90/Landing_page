// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
import nusantarun from "assets/images/logos/client/Nusantarun.svg";
import fifa from "assets/images/logos/client/Logo Fifa.png";
import grab from "assets/images/logos/client/Grab_Logo.png";
import paddle_pop from "assets/images/logos/client/logo paddle pop.png";
import ovo from "assets/images/logos/client/Logo OVO.png";
import telkom from "assets/images/logos/client/Logo Telkom Akses.png";
import btn from "assets/images/logos/client/Logo - Bank BTN.png";
import aqua from "assets/images/logos/client/Logo Aqua.png";
import confidence from "assets/images/logos/client/Logo confidence.png";

function ClientsPart() {
  const clientCollect = (
    <Grid item xs={6} md={4} lg={2}>
      <MKBox component="img" src={coinbase} alt="coinbase" width="100%" opacity={1} />
    </Grid>
  );
  return (
    <MKBox component="section" pt={10} pb={8}>
      <Container>
        <Grid container direction="flex-column" sx={{ mb: 12 }} justifyContent="center">
          <Grid xs={3} md={2} lg={1} mx={2} alignContent="center" alignItems="center">
            <MKBox component="img" src={grab} alt="coinbase" width="100%" />
          </Grid>
          <Grid item xs={3} md={2} lg={1} mx={2} alignContent="center" alignItems="center">
            <MKBox component="img" src={ovo} alt="nasa" width="100%" />
          </Grid>
          <Grid item xs={3} md={2} lg={1} mx={2} alignContent="center" alignItems="center">
            <MKBox component="img" src={paddle_pop} alt="netflix" width="100%" />
          </Grid>
          <Grid item xs={3} md={2} lg={1} mx={2} alignContent="center" alignItems="center">
            <MKBox component="img" src={telkom} alt="pinterest" width="100%" />
          </Grid>
          <Grid item xs={3} md={2} lg={1} mx={2} alignContent="center" alignItems="center">
            <MKBox component="img" src={btn} alt="spotify" width="100%" />
          </Grid>
          <Grid item xs={3} md={2} lg={1} mx={2} alignContent="center" alignItems="center">
            <MKBox component="img" src={aqua} alt="vodafone" width="100%" />
          </Grid>
          <Grid item xs={3} md={2} lg={1} mx={2} alignContent="center" alignItems="center">
            <MKBox component="img" src={confidence} alt="coinbase" width="100%" />
          </Grid>
          <Grid item xs={3} md={2} lg={1} mx={2} alignContent="center" alignItems="center">
            <MKBox component="img" src={fifa} alt="nasa" width="100%" />
          </Grid>
          <Grid item xs={3} md={2} lg={1} mx={2} alignContent="center" alignItems="center">
            <MKBox component="img" src={nusantarun} alt="netflix" width="100%" />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={200}
              suffix="+"
              separator=","
              title="Projects"
              description="Of “high-performing” level are led by a certified project manager"
            />
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={3400}
              separator=","
              suffix="+"
              title="Hours"
              description="That meets quality standards required by our users"
            />
          </Grid> */}
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              description="Actively engage team members that finishes on time"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ClientsPart;
