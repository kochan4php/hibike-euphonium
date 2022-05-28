import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
  { path: "/", name: "Home" },
  { path: "/#about", name: "About" },
  { path: "/#anime", name: "Anime" },
  { path: "/#novel", name: "Novel" },
  { path: "/characters", name: "Characters" },
];

const Navbar = () => {
  const router = useRouter();
  console.log(router);

  return (
    <nav className="bg-transparent z-[999] fixed w-full transition-all duration-300 text-white border-b border-b-transparent">
      <div className="container flex justify-between items-center py-1 relative">
        <div>
          <img src="/icon/logo-hibike-euphonium.png" width="130" height="50" />
        </div>

        <ul className="flex md:w-[60%] lg:w-[50%] absolute sm:static sm:flex-row sm:bg-transparent sm:justify-evenly md:justify-between lg:justify-evenly text-lg font-semibold right-0 flex-col bg-slate-800 bg-opacity-30 sm:bg-opacity-0 sm:backdrop-blur-none backdrop-blur-xl min-h-screen sm:min-h-0 top-0 justify-evenly items-center -z-[1] sm:z-[99] w-[75%] translate-x-[100%] sm:translate-x-0 transition-all duration-500">
          {routes.map(({ path, name }, index) => (
            <li key={index}>
              <Link href={path}>
                <a className="hover:text-fuchsia-400 transition-all duration-200">
                  <span
                    className={router.asPath === path && "text-fuchsia-400"}
                  >
                    {name}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <button className="menu-toggle cursor-pointer sm:hidden z-[99]">
          <span className="hamburger-line origin-top-right"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line origin-bottom-right"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
