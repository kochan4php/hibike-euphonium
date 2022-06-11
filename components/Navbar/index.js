import { useEffect } from "react";
import Link from "next/link";

const routes = [
  { path: "/", name: "Home" },
  { path: "/#about", name: "About" },
  { path: "/#anime", name: "Anime" },
  { path: "/#novel", name: "Novel" },
  { path: "/characters", name: "Characters" },
];

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector("nav");
    const toggle = document.getElementById("toggle");
    const navUl = document.querySelector("nav ul");

    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-fixed");
        navUl.classList.remove("bg-opacity-30");
      } else {
        navbar.classList.remove("navbar-fixed");
        navUl.classList.add("bg-opacity-30");
      }
    };

    toggle.addEventListener("click", function () {
      this.classList.toggle("hamburger-active");
      navUl.classList.toggle("slide");
    });

    window.addEventListener("click", function (e) {
      if (e.target !== navUl && e.target !== toggle) {
        navUl.classList.remove("slide");
        toggle.classList.remove("hamburger-active");
      }
    });
  }, []);

  return (
    <nav className="bg-transparent z-[999] fixed w-full transition-all duration-300 text-white border-b border-b-transparent">
      <div className="container flex justify-between items-center py-1 relative">
        <div className="selection:bg-purple-500 selection:text-purple-900">
          <img
            src="/icon/logo-hibike-euphonium.png"
            width="130"
            height="50"
            alt="logo"
          />
        </div>

        <ul className="flex absolute md:static text-lg font-semibold right-0 flex-col md:flex-row bg-slate-800 md:bg-transparent md:border-none md:h-0 md:z-[999] md:backdrop-blur-none backdrop-blur-lg h-[70vh] top-[75px] bottom-0 justify-evenly md:justify-between items-center -z-[199] w-[65%] md:w-[60%] lg:w-[40%] transition-all duration-300 md:rounded-none rounded-md border border-slate-600 navbar-nav">
          {routes.map(({ path, name }, index) => (
            <li key={index}>
              <Link href={path}>
                <a className="transition-all duration-200 p-[1px] border-b-2 border-transparent hover:border-b-slate-200 selection:bg-emerald-500 selection:text-emerald-900">
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden relative">
          <input
            type="checkbox"
            id="toggle"
            className="absolute w-[30px] h-[30px] z-[999] opacity-0 cursor-pointer"
          />
          <span className="hamburger-line origin-top-right"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line origin-bottom-right"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
