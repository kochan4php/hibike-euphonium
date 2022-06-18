import PropTypes from "prop-types";

const Button = ({ children, onClick }) => (
  <div className="container flex justify-start my-5 lg:px-0">
    <button
      className="px-7 py-1.5 rounded bg-slate-900 text-slate-5 focus:ring focus:ring-sky-500 hover:border-sky-500 border-2 border-transparent transition-all duration-300 selection:bg-orange-500 selection:text-orange-900"
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
