import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";

const ParallaxImage = ({ image, alt }) => (
  <>
    <Tilt perspective={700} className="justify-center hidden lg:flex">
      <img
        src={image}
        alt={alt}
        className="rounded shadow shadow-slate-800 w-full md:w-4/5 lg:w-full"
      />
    </Tilt>
    <div className="flex justify-center lg:hidden">
      <img
        src={image}
        alt={alt}
        className="rounded shadow shadow-slate-800 w-full md:w-4/5 lg:w-full"
      />
    </div>
  </>
);

ParallaxImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ParallaxImage;
