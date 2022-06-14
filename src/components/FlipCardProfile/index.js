import PropTypes from "prop-types";

const FlipCardProfile = ({ children }) => (
  <div className="flip-card bg-transparent w-[200px] h-[300px] hidden md:block">
    <div className="flip-card-inner relative h-full w-full text-center">
      {children}
    </div>
  </div>
);

FlipCardProfile.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FlipCardProfile;
