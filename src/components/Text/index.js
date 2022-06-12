const Text = ({ children, category }) => (
  <p>
    <span className="font-semibold my-[2px] inline-block">
      {category}&nbsp;:&nbsp;
    </span>
    {children}
  </p>
);

export default Text;
