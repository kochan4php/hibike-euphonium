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
        <div>
          <img
            src="/icon/logo-hibike-euphonium.png"
            width="130"
            height="50"
            alt="logo"
          />
        </div>

        <ul className="flex md:w-[60%] lg:w-[50%] absolute sm:static sm:flex-row sm:bg-transparent sm:justify-evenly md:justify-between lg:justify-evenly text-lg font-semibold right-0 flex-col bg-slate-800 bg-opacity-30 sm:bg-opacity-0 sm:backdrop-blur-none backdrop-blur-xl min-h-screen sm:min-h-0 top-0 justify-evenly items-center -z-[1] sm:z-[99] w-[73%] translate-x-[100%] sm:translate-x-0 transition-all duration-300">
          {routes.map(({ path, name }, index) => (
            <li key={index}>
              <Link href={path}>
                <a className="transition-all duration-200 p-[1px] border-b-2 border-transparent hover:border-b-slate-200">
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden relative">
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
