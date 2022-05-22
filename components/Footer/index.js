import Link from "next/link";

const Footer = () => (
  <footer className="px-4 py-6 text-center text-white min-w-full bg-slate-800">
    <p className="text-lg md:text-xl">
      &copy; Copyright 2022 by{" "}
      <Link href="https://github.com/kochan4php">
        <a
          target="_blank"
          className="hover:text-sky-500 transition-colors duration-200"
        >
          Kochan.php
        </a>
      </Link>
    </p>
  </footer>
);

export default Footer;
