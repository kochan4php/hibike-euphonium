import PropTypes from "prop-types";

const FlipCard = ({ children }) => (
  <div className="flip-card bg-transparent w-[200px] h-[300px] hidden md:block selection:bg-orange-500">
    <div className="flip-card-inner relative h-full w-full text-center">
      {children}
    </div>
  </div>
);

FlipCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlipCard;
