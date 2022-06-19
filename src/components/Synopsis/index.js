import PropTypes from "prop-types";

const Synopsis = ({ children }) => (
  <div className="mt-10 lg:mt-0 md:pt-10 lg:pt-16">
    <h1 className="text-3xl md:text-4xl mb-7 selection:bg-emerald-500 selection:text-emerald-900">
      Synopsis
    </h1>
    <p className="text-md md:text-lg text-justify md:text-left selection:bg-green-500 selection:text-green-900">
      {children}
    </p>
  </div>
);

Synopsis.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Synopsis;
