const Navbar = () => (
  <nav className="bg-teal-500 text-slate-50 fixed w-full z-[9999999]">
    <div className="container">
      <div className="flex py-1 justify-between items-center relative">
        <div className="w-32 h-12 flex items-center">
          <img src="/icon/logo-hibike-euphonium.png" width="90%" height="90%" />
        </div>
        <ul className="flex flex-col justify-evenly items-center bergeser absolute bg-teal-500 -z-[999] w-screen h-screen top-0 nav-link transition-all duration-500">
          <li>
            <a
              href="#"
              className="text-xl px-4 py-2 border-2 hover:border-sky-500 border-transparent rounded-md transition-all duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl px-4 py-2 border-2 hover:border-sky-500 border-transparent rounded-md transition-all duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl px-4 py-2 border-2 hover:border-sky-500 border-transparent rounded-md transition-all duration-200"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl px-4 py-2 border-2 hover:border-sky-500 border-transparent rounded-md transition-all duration-200"
            >
              Anime
            </a>
          </li>
        </ul>
        <div className="menu-toggle cursor-pointer">
          <span className="hamburger-line origin-top-right"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line origin-bottom-right"></span>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
