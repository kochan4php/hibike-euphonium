import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import CardImage from "../CardImage";

const ParallaxCardImage = ({ image, alt }) => (
  <div className="rounded">
    <Tilt perspective={850} className="hidden lg:block">
      <CardImage
        src={image}
        alt={alt}
        width="100%"
        height="100%"
        className="rounded selection:bg-pink-500"
      />
    </Tilt>

    <CardImage
      src={image}
      alt={alt}
      width="100%"
      height="100%"
      className="rounded selection:bg-pink-500 lg:hidden"
    />
  </div>
);

ParallaxCardImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ParallaxCardImage;
