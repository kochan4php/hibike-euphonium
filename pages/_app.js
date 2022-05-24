import { useEffect } from "react";
import { Navbar } from "../components";
import Layout from "../layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLink = document.querySelector(".nav-link");

    menuToggle.addEventListener("click", function () {
      this.classList.toggle("hamburger-active");

      if (navLink.classList.contains("bergeser")) {
        navLink.classList.remove("bergeser");
        navLink.classList.add("bergeser-berlawanan");
      } else {
        navLink.classList.add("bergeser");
        navLink.classList.remove("bergeser-berlawanan");
      }
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
