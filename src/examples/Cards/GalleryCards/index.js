// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function GalleryCard({ image, name, ...rest }) {
  const imageTemplate = (
    <MKBox
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      minHeight="10rem"
      width="100%"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
      {...rest}
    ></MKBox>
  );

  return (
    <MKBox position="relative">
      {imageTemplate}
      {name > 0 ? (
        <MKBox mt={1} ml={1} lineHeight={1}>
          {name && (
            <MKTypography variant="h6" fontWeight="bold">
              {name}
            </MKTypography>
          )}
        </MKBox>
      ) : null}
    </MKBox>
  );
}

// Setting default props for the ExampleCard
GalleryCard.defaultProps = {
  name: "",
};

// Typechecking props for the ExampleCard
GalleryCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default GalleryCard;
