import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { About, Intro } from "../components";

const Home = () => {
  const text = useRef(null);

  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: [
        "響け！ユーフォニアム",
        "Hibike! Euphonium",
        "Sound! Euphonium",
      ],
      loop: true,
      typeSpeed: 70,
      backSpeed: 70,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-fixed bg-[url('/img/4.webp')] md:bg-[url('/img/2.webp')] bg-cover bg-center bg-no-repeat">
        <section className="min-h-screen min-w-full bg-slate-800 bg-opacity-50">
          <div className="container min-h-screen flex justify-center items-center">
            <h1
              ref={text}
              className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center selection:bg-pink-500 selection:text-pink-800"
            ></h1>
          </div>
        </section>
      </div>

      <section className="min-w-full min-h-screen bg-gradient-to-tr from-slate-800 via-slate-700 to-slate-800 text-white py-10 flex items-center">
        <Intro />
      </section>

      <div className="min-h-screen bg-fixed bg-[url('/img/3.webp')] md:bg-[url('/img/1.webp')] bg-cover bg-center bg-no-repeat">
        <section
          className="min-h-screen min-w-full bg-slate-800 bg-opacity-60 py-20 md:py-0"
          id="about"
        >
          <About />
        </section>
      </div>
    </>
  );
};

export default Home;
