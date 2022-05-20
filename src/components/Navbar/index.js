import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.onclick = function () {
      if (navMenu.classList.contains("hidden")) {
        navMenu.classList.remove("hidden");
      } else {
        navMenu.classList.add("hidden");
      }
    };
  }, []);

  return (
    <header className="bg-slate-700 bg-opacity-60 backdrop-blur-md fixed top-0 right-0 left-0 text-slate-50">
      <div className="containe p-4 flex justify-between items-center">
        <div className="font-semibold text-xl">Asuka Tanaka</div>
        <div>
          <button className="md:hidden hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <nav className="hidden md:flex nav-menu">
            <ul>
              <li>Tes</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
