import PropTypes from "prop-types";

const TitleSection = ({ children, centerText }) => (
  <h1
    className={`text-sky-300 font-semibold text-4xl xl:text-5xl selection:bg-teal-500 selection:text-teal-900 ${
      centerText ? "text-center" : ""
    }`}
  >
    {children}
  </h1>
);

TitleSection.propTypes = {
  centerText: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TitleSection;
