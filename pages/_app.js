import { useEffect } from "react";
import { Navbar } from "../components";
import Layout from "../layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const menuToggle = document.querySelector("button.menu-toggle");
    const navUl = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
      this.classList.toggle("hamburger-active");
      navUl.classList.toggle("slide");
    });
  }, []);

  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
