import { Footer, Navbar } from "@/components";
import Head from "next/head";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Hibike! Euphonium</title>
      <meta name="description" content="Hibike! Euphonium" />
      <link rel="icon" href="/icon/logo-hibike-euphonium.png" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="keywords" content="Hibike Euphonium" />
    </Head>
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
