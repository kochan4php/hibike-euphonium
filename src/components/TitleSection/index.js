import PropTypes from "prop-types";

const TitleSection = ({ children }) => (
  <div className="mt-8 mb-12">
    <h1 className="text-center text-sky-300 font-semibold text-4xl lg:text-5xl selection:bg-teal-500 selection:text-teal-900">
      {children}
    </h1>
  </div>
);

TitleSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TitleSection;
