import PropTypes from "prop-types";

const Text = ({ children, category }) => (
  <p>
    <span className="font-semibold my-[2px] inline-block">
      {category}&nbsp;:&nbsp;
    </span>
    {children}
  </p>
);

Text.propTypes = {
  children: PropTypes.element.isRequired,
  category: PropTypes.string.isRequired,
};

export default Text;
