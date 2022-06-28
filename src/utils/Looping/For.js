import PropTypes from "prop-types";
import { Children } from "react";

const For = ({ each, render }) =>
  Children.toArray(each?.map((item, index) => render(item, index)));

For.propTypes = {
  each: PropTypes.array.isRequired,
  render: PropTypes.node.isRequired,
};

export default For;
