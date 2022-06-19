import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => (
  <h1 className="text-xl md:text-2xl font-medium text-center">{message}</h1>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
