// react-router-dom components
import { Link } from "react-router-dom";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// @mui material components
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function Breadcrumbs({ routes, ...rest }) {
  return (
    <MKBox bgColor="light" borderRadius="md" py={1} px={2} width="100%">
      <MuiBreadcrumbs {...rest}>
        {routes.map(({ label, route }) =>
          route ? (
            <MKTypography
              key={label}
              component={Link}
              to={route}
              variant="button"
              color="text"
              fontWeight="regular"
              opacity={0.8}
              sx={{
                "&:hover, &:focus": {
                  color: ({ palette: { info } }) => info.main,
                },
              }}
            >
              {label}
            </MKTypography>
          ) : (
            <MKTypography key={label} variant="button" fontWeight="regular">
              {label}
            </MKTypography>
          )
        )}
      </MuiBreadcrumbs>
    </MKBox>
  );
}

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Breadcrumbs;
