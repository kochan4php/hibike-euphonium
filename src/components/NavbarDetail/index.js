import PropTypes from "prop-types";
import Link from "next/link";

// Navbar for detail page
const NavbarDetail = ({ routes }) => (
  <div className="container my-6 py-3 xl:rounded text-base md:text-lg bg-gray-900">
    <nav>
      <ul className="flex w-full justify-between lg:justify-evenly overflow-x-scroll lg:overflow-x-hidden nav-detail">
        {routes.map(({ path, name }, index) => (
          <li key={index} className="px-3 mx-3 py-0.5 rounded">
            <Link href={path}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

NavbarDetail.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default NavbarDetail;
