import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { About, Card, Footer } from "../components";
import JIKAN_API from "../config/Jikan";
import Layout from "../layout";

const Home = ({ jikanAnime }) => {
  const text = useRef(null);
  const dataAnijme = jikanAnime.data;

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

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-fixed bg-[url('/img/4.webp')] md:bg-[url('/img/2.webp')] bg-cover bg-center">
        <section className="min-h-screen min-w-full bg-slate-800 bg-opacity-50">
          <div className="container min-h-screen flex justify-center items-center">
            <h1
              ref={text}
              className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center selection:bg-pink-500 selection:text-pink-800"
            ></h1>
          </div>
        </section>
        <section className="min-w-full bg-slate-800 text-white py-10 min-h-screen flex items-center">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center lg:px-8 gap-4">
              <div className="w-full flex flex-col items-center lg:items-start min-h-full justify-center lg:justify-start">
                <h1 className="text-4xl text-center md:text-5xl font-semibold my-6">
                  響け！ <span className="text-pink-500">ユーフォニアム</span>
                </h1>
                <p className="text-slate-400 text-lg text-center w-full md:w-2/3 lg:w-5/6 lg:text-left sm:px-12 lg:px-0">
                  Sound! Euphonium or Hibike! Euphonium is a Japanese novel
                  written by Ayano Takeda, published on December 5, 2013 by
                  Takarajimasha.
                </p>
              </div>
              <div className="w-full items-center h-full flex justify-center lg:justify-evenly">
                <Image
                  src="/img/asuka2.webp"
                  width={450}
                  height={450}
                  objectPosition="center"
                  objectFit="cover"
                  alt="Istri Saya"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="min-w-full bg-slate-700 py-12 min-h-screen">
          <div className="container">
            <div>
              <h1 className="text-center text-sky-300 font-semibold text-3xl md:text-4xl lg:text-5xl mt-8 mb-12">
                List Anime
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-5 mx-auto">
              {dataAnijme.map((data, index) => {
                if (index === 11 || index === 8) {
                  return;
                }

                return <Card data={data} key={data.mal_id} />;
              })}
            </div>
          </div>
        </section>
      </div>
      <About />
      <Footer />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const responseAnime = await fetch(`${JIKAN_API}/anime?q=hibike%20euphonium`);
  const data = await responseAnime.json();
  const jikanAnime = await data;

  return {
    props: {
      jikanAnime,
    },
  };
};
