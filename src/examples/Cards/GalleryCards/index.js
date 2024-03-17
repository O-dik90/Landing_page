// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
// @mui material components
import YouTubeIcon from "@mui/icons-material/YouTube";

function GalleryCard({ image, name, route, ...rest }) {
    const imageTemplate = (
        <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            minHeight="10rem"
            width="100%"
            sx={{
                display: "grid",
                placeItems: "cover",
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
        >
            <MKBox component="img" src={image} alt={name} width="100%" my="auto" />
        </MKBox>
    );

    return (
        <MKBox position="relative">
            {/* <Tooltip title={`YT: ${route?.substring(0, 15)} ...`} placement="top-end">
        
      </Tooltip> */}
            {imageTemplate}
            <MKBox mt={1} ml={1} lineHeight={1}>
                {name && (
                    <MKTypography variant="h6" fontWeight="bold">
                        {name}
                    </MKTypography>
                )}
                {route && (
                    <MKTypography variant="button" fontWeight="regular" color="secondary">
                        <YouTubeIcon /> {route?.substring(0, 30)}...
                    </MKTypography>
                )}
            </MKBox>
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
