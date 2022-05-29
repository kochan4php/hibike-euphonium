const Button = ({ children, onClick }) => (
  <div className="container flex justify-start my-6">
    <button
      className="px-7 py-2 rounded-md bg-slate-800 text-slate-5 focus:ring focus:ring-sky-500 hover:bg-slate-700 hover:border-sky-500 border-2 border-transparent transition-all duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

export default Button;
