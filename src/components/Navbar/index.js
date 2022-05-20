import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const routes = [
  { destination: "/", routeName: "Home" },
  { destination: "/about", routeName: "About" },
  { destination: "/anime", routeName: "List Anime" },
  { destination: "/characters", routeName: "List Characters" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.onclick = function () {
      if (navMenu.classList.contains("hidden")) {
        navMenu.classList.remove("hidden");
        navMenu.classList.add("absolute");
      } else {
        navMenu.classList.add("hidden");
        navMenu.classList.remove("absolute");
      }
    };
  }, []);

  return (
    <header className="bg-gradient-to-tl md:bg-gradient-to-tr from-teal-500 via-sky-600 to-indigo-600 bg-opacity-60 backdrop-blur-md fixed top-0 right-0 left-0 text-slate-50">
      <div className="container p-4 md:p-0 flex justify-between items-center relative">
        <div className="font-semibold text-xl">Hibike Euphonium</div>
        <div>
          <button className="md:hidden hamburger" onClick={handleIsOpen}>
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
          <nav className="hidden md:flex nav-menu top-full right-0 w-full bg-gradient-to-bl from-teal-500 via-sky-600 to-indigo-600 z-[99] md:bg-none">
            <ul className="flex flex-col md:flex-row justify-center font-semibold text-lg">
              {routes.map(({ destination, routeName }, index) => (
                <li key={index}>
                  <Link
                    to={destination}
                    className="hover:text-slate-800 transition-all duration-200 w-full block p-4 md:ml-3"
                  >
                    {routeName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
