import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

// Navbar for detail page
const NavbarDetail = ({ routes }) => {
  const router = useRouter();
  const currentPath = router.asPath.split("/")[3];

  return (
    <div className="container my-5 py-2.5 xl:rounded text-base md:text-lg bg-slate-700">
      <nav>
        <ul className="flex w-full justify-between lg:justify-evenly overflow-x-scroll lg:overflow-x-hidden nav-detail">
          {routes.map(({ path, name }, index) => {
            return (
              <li key={index} className="px-3 mx-3 py-0.5 rounded">
                <Link href={path}>
                  <a
                    className={`transition-all duration-200 p-[1px] border-b-2 border-transparent hover:border-b-slate-200 selection:bg-emerald-500 selection:text-emerald-900 ${
                      currentPath === path.split("/")[1] ? "active" : ""
                    }`}
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

NavbarDetail.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default NavbarDetail;
