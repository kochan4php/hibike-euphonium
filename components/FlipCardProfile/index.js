const FlipCardProfile = ({ children }) => (
  <div className="flip-card bg-transparent w-[200px] h-[300px] hidden lg:block">
    <div className="flip-card-inner relative h-full w-full text-center">
      {children}
    </div>
  </div>
);

export default FlipCardProfile;
