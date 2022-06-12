const CardLink = ({ children, px, py, fontsize }) => (
  <a
    className={`text-white group-hover:text-fuchsia-400 tracking-wide transition-colors duration-300 selection:bg-teal-500 selection:text-teal-800 block font-medium ${fontsize} ${px} ${py}`}
  >
    {children}
  </a>
);

export default CardLink;
