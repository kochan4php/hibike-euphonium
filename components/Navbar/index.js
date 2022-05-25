// const Navbar = () => (
//   <nav className="bg-teal-500 text-slate-50 fixed w-full z-[9999999]">
//     <div className="container">
//       <div className="flex py-1 justify-between items-center relative">
//         <div className="w-32 h-12 flex items-center">
//           <img src="/icon/logo-hibike-euphonium.png" width="90%" height="90%" />
//         </div>
//         <ul className="flex flex-col justify-evenly items-center bergeser absolute bg-teal-500 -z-[999] w-screen h-screen top-0 nav-link transition-all duration-500 md:static md:h-full md:w-[400px] md:translate-x-0 md:flex-row md:justify-between md:bg-transparent lg:w-[470px] md:z-[9999]">
//           <li>
//             <a
//               href="#"
//               className="text-xl px-4 py-2 border-2 hover:border-sky-500 border-transparent rounded-md transition-all duration-200 md:text-lg md:border-0 md:hover:text-teal-700"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-xl px-4 py-2 border-2 hover:border-sky-500 border-transparent rounded-md transition-all duration-200 md:text-lg md:border-0 md:hover:text-teal-700"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-xl px-4 py-2 border-2 hover:border-sky-500 border-transparent rounded-md transition-all duration-200 md:text-lg md:border-0 md:hover:text-teal-700"
//             >
//               List Anime
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-xl px-4 py-2 border-2 hover:border-sky-500 border-transparent rounded-md transition-all duration-200 md:text-lg md:border-0 md:hover:text-teal-700"
//             >
//               Github
//             </a>
//           </li>
//         </ul>
//         <div className="menu-toggle cursor-pointer md:hidden">
//           <span className="hamburger-line origin-top-right"></span>
//           <span className="hamburger-line"></span>
//           <span className="hamburger-line origin-bottom-right"></span>
//         </div>
//       </div>
//     </div>
//   </nav>
// );

import Link from "next/link";

const routes = [
  { path: "/", name: "Home" },
  { path: "/", name: "About" },
  { path: "/", name: "List Anime" },
  { path: "/", name: "Github" },
];

const Navbar = () => (
  <nav className="bg-fuchsia-600 text-fuchsia-100 fixed z-[9999] w-full">
    <div className="container flex justify-between items-center py-1">
      <div>
        <img src="/icon/logo-hibike-euphonium.png" width="130" height="50" />
      </div>

      <ul className="md:flex md:w-[55%] lg:w-[40%] hidden md:justify-between lg:justify-evenly text-lg font-semibold">
        {routes.map(({ path, name }, index) => (
          <li key={index}>
            <Link href={path}>
              <a className="text-fuchsia-200 hover:text-fuchsia-50 transition-all border-2 border-transparent hover:border-b-slate-200 duration-300">
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
