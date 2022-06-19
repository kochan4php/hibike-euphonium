import PropTypes from "prop-types";
import { NavbarDetail } from "../../components";

const LayoutDetailPage = ({ children, routes }) => (
  <section className="min-w-full bg-gradient-to-tl from-slate-800 via-slate-700 to-slate-800 text-white pt-16 pb-6 min-h-screen">
    <NavbarDetail routes={routes} />
    <main>{children}</main>
  </section>
);

LayoutDetailPage.propTypes = {
  children: PropTypes.node.isRequired,
  routes: PropTypes.array.isRequired,
};

export default LayoutDetailPage;
