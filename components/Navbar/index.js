import Link from "next/link";

const routes = [
  { path: "/", name: "Home" },
  { path: "/", name: "About" },
  { path: "/", name: "List Anime" },
  { path: "/", name: "Github" },
];

const Navbar = () => (
  <nav className="bg-transparent  z-[999] fixed w-full transition-all duration-300 text-white">
    <div className="container flex justify-between items-center py-1 relative">
      <div>
        <img src="/icon/logo-hibike-euphonium.png" width="130" height="50" />
      </div>

      <ul className="flex md:w-[55%] lg:w-[40%] absolute md:static md:flex-row md:bg-transparent md:justify-between lg:justify-evenly text-lg font-semibold right-0 flex-col bg-fuchsia-600 min-h-screen md:min-h-0 top-0 justify-evenly items-center -z-[1] md:z-[99] w-[75%] translate-x-[100%] md:translate-x-0 transition-all duration-500">
        {routes.map(({ path, name }, index) => (
          <li key={index}>
            <Link href={path}>
              <a className="hover:text-fuchsia-50 transition-all border-2 border-transparent hover:border-b-slate-200 duration-300">
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <button className="menu-toggle cursor-pointer md:hidden">
        <span className="hamburger-line origin-top-right"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line origin-bottom-right"></span>
      </button>
    </div>
  </nav>
);

export default Navbar;
