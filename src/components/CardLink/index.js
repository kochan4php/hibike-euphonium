import PropTypes from "prop-types";

const CardLink = ({ children, px, py, fontsize }) => (
  <a
    className={`text-white group-hover:text-teal-300 tracking-wide transition-colors duration-300 selection:bg-teal-500 selection:text-teal-800 block font-medium ${fontsize} ${px} ${py}`}
  >
    {children}
  </a>
);

CardLink.propTypes = {
  children: PropTypes.node.isRequired,
  px: PropTypes.string,
  py: PropTypes.string,
  fontSize: PropTypes.string,
};

export default CardLink;
